"use client";

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  scrollSnaps: number[];
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const onSelect = React.useCallback((carouselApi: CarouselApi) => {
      if (!carouselApi) {
        return;
      }

      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setSelectedIndex(carouselApi.selectedScrollSnap());
      setScrollSnaps(carouselApi.scrollSnapList());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          api,
          canScrollNext,
          canScrollPrev,
          carouselRef,
          opts,
          orientation,
          plugins,
          scrollNext,
          scrollPrev,
          scrollSnaps,
          selectedIndex,
          setApi,
        }}
      >
        <div className={cn("relative min-w-0", className)} ref={ref} role="region" {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div className="overflow-hidden" ref={carouselRef}>
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      ref={ref}
      role="group"
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

function CarouselControls({ className }: { className?: string }) {
  const { canScrollNext, canScrollPrev, scrollNext, scrollPrev, selectedIndex, scrollSnaps, api } = useCarousel();

  return (
    <div className={cn("mt-4 flex items-center justify-between gap-4", className)}>
      <div className="flex items-center gap-2">
        <button
          aria-label="Previous slide"
          className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] border border-[var(--rule)] bg-[var(--panel)] text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.04)] disabled:cursor-not-allowed disabled:opacity-40"
          disabled={!canScrollPrev}
          onClick={scrollPrev}
          type="button"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />
        </button>
        <button
          aria-label="Next slide"
          className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] border border-[var(--rule)] bg-[var(--panel)] text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[rgba(20,32,130,0.04)] disabled:cursor-not-allowed disabled:opacity-40"
          disabled={!canScrollNext}
          onClick={scrollNext}
          type="button"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
        </button>
      </div>
      <div className="flex items-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-2 w-2 rounded-full transition-colors duration-200",
              selectedIndex === index ? "bg-[var(--accent)]" : "bg-[var(--rule)] hover:bg-[var(--accent-2)]",
            )}
            key={index}
            onClick={() => api?.scrollTo(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}

export { Carousel, CarouselContent, CarouselControls, CarouselItem, useCarousel, type CarouselApi };
