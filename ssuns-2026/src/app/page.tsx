"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AtAGlancePlate } from "@/components/home/AtAGlancePlate";
import { SecretaryLetterModal } from "@/components/home/SecretaryLetterModal";
import { Container, Section } from "@/components/layout";
import { Reveal } from "@/components/motion/Reveal";
import { HeroBackgroundMedia } from "@/components/HeroBackgroundMedia";
import { LandAcknowledgementBlock } from "@/components/LandAcknowledgementBlock";
import { LiquidButton } from "@/components/LiquidButton";
import { CommitteeImage } from "@/components/media/CommitteeImage";
import { EditorialGallery } from "@/components/media/EditorialGallery";
import { DossierFigure } from "@/components/media/DossierFigure";
import { useSiteContent } from "@/lib/useSiteContent";

function RegistrationVideoPanel() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncState = () => {
      setIsPlaying(!video.paused);
      setIsMuted(video.muted);
      setCurrentTime(video.currentTime || 0);
      setDuration(Number.isFinite(video.duration) ? video.duration : 0);
    };

    syncState();
    video.addEventListener("play", syncState);
    video.addEventListener("pause", syncState);
    video.addEventListener("timeupdate", syncState);
    video.addEventListener("loadedmetadata", syncState);
    video.addEventListener("durationchange", syncState);

    return () => {
      video.removeEventListener("play", syncState);
      video.removeEventListener("pause", syncState);
      video.removeEventListener("timeupdate", syncState);
      video.removeEventListener("loadedmetadata", syncState);
      video.removeEventListener("durationchange", syncState);
    };
  }, []);

  useEffect(() => {
    const syncFullscreen = () => {
      setIsFullscreen(document.fullscreenElement === panelRef.current);
    };

    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => document.removeEventListener("fullscreenchange", syncFullscreen);
  }, []);

  const progress = useMemo(() => {
    if (!duration) return 0;
    return Math.max(0, Math.min(100, (currentTime / duration) * 100));
  }, [currentTime, duration]);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = async () => {
    const panel = panelRef.current;
    if (!panel) return;

    if (document.fullscreenElement === panel) {
      await document.exitFullscreen();
      return;
    }

    await panel.requestFullscreen();
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const nextTime = (Number(event.target.value) / 100) * duration;
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  return (
    <div className="group relative min-h-[280px] overflow-hidden bg-[#0d153e] lg:min-h-full" ref={panelRef}>
      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        className="h-full w-full object-cover"
        loop
        playsInline
        preload="metadata"
      >
        <source src="/video/registration-open.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/12 bg-[rgba(8,14,44,0.52)] px-4 py-3 backdrop-blur-md transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
        <div className="flex items-center gap-3">
          <button
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-[rgba(255,255,255,0.08)] text-white transition-colors duration-200 hover:border-white/34 hover:bg-[rgba(255,255,255,0.16)]"
            onClick={togglePlayback}
            type="button"
          >
            {isPlaying ? (
              <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 6h3v12H8zm5 0h3v12h-3z" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5.5v13l10-6.5-10-6.5z" />
              </svg>
            )}
          </button>
          <button
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-[rgba(255,255,255,0.08)] text-white transition-colors duration-200 hover:border-white/34 hover:bg-[rgba(255,255,255,0.16)]"
            onClick={toggleMute}
            type="button"
          >
            {isMuted ? (
              <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 7.8v8.4L10.6 13H7v-2h3.6L14 7.8zm3.7 1.1-1.4 1.4a3.5 3.5 0 0 1 0 3.4l1.4 1.4a5.5 5.5 0 0 0 0-6.2zM19.4 5l-9 9-3.4-3.4L5.6 12l3.4 3.4-3.4 3.4L7 20.2l13.8-13.8L19.4 5z" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 7.8v8.4L10.6 13H7v-2h3.6L14 7.8zm3.4-1.3-1.4 1.4a6 6 0 0 1 0 8.2l1.4 1.4a8 8 0 0 0 0-11z" />
              </svg>
            )}
          </button>
          <div className="flex-1">
            <input
              aria-label="Registration video progress"
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-white"
              max="100"
              min="0"
              onChange={handleSeek}
              type="range"
              value={progress}
            />
            <div aria-hidden className="mt-2 h-px w-full bg-[linear-gradient(90deg,rgba(76,158,255,0.85),rgba(255,255,255,0.18))]" />
          </div>
          <button
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-[rgba(255,255,255,0.08)] text-white transition-colors duration-200 hover:border-white/34 hover:bg-[rgba(255,255,255,0.16)]"
            onClick={toggleFullscreen}
            type="button"
          >
            {isFullscreen ? (
              <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M9 15H5v4m0-4 5 5M15 9h4V5m0 4-5-5" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M9 5H5v4m0-4 5 5M15 19h4v-4m0 4-5-5" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const { committees, committeesPageContent, contactContent, homeContent, language } = useSiteContent();
  const sectionSpacing = "pt-6 pb-8 md:pt-8 md:pb-10 xl:pt-10 xl:pb-12";
  const [isSecretaryLetterOpen, setIsSecretaryLetterOpen] = useState(false);
  const secretaryGeneralEmail =
    contactContent.directory.find((entry) => entry.role === "Secretary-General")?.email ?? null;
  const secretaryLetterPreview = homeContent.directorNote.body.slice(0, 2);
  const featuredCommittees = homeContent.featuredCommittees.items
    .map((item) => {
      const committee = committees.find((entry) => entry.slug === item.slug);

      if (!committee) {
        return null;
      }

      return { ...committee, note: item.note };
    })
    .filter((committee): committee is NonNullable<typeof committee> => committee !== null);
  const homeGalleryItems = [
    { id: "home-photo-1", src: "/photos/delegates(3).JPG", alt: "Delegates debating during session", eyebrow: "Delegates", caption: "Debate is strongest when the room feels active but composed." },
    { id: "home-photo-2", src: "/photos/secretariat(2).JPG", alt: "Secretariat members preparing conference materials", eyebrow: "Secretariat", caption: "Student leadership shapes the conference from preparation to close." },
    { id: "home-photo-3", src: "/photos/gala(2).JPG", alt: "Conference ceremony or gala setting", eyebrow: "Ceremony", caption: "Plenary and evening moments carry the conference's ceremonial weight." },
    { id: "home-photo-4", src: "/photos/hotel-1600x900.jpg", alt: "Sheraton exterior in Montréal", eyebrow: "Arrival", caption: "The venue anchors the conference rhythm from check-in to closing." },
    { id: "home-photo-5", src: "/photos/icao(1).JPG", alt: "ICAO scene in Montréal", eyebrow: "ICAO", caption: "Montréal itself becomes part of the learning experience." },
    { id: "home-photo-6", src: "/photos/delegates(8).JPG", alt: "Delegates moving between conference spaces", eyebrow: "Circulation", caption: "The best conference layouts support movement, conversation, and momentum." },
  ];

  return (
    <>
      <Section className="pt-6 md:pt-8 xl:pt-10" id="hero" spacing="none">
        <Container>
          <div className="film-grain relative isolate h-[480px] overflow-hidden rounded-[12px] border border-[#20349c] bg-[#0f183e] px-6 py-10 shadow-[var(--shadow-strong)] sm:h-[560px] sm:px-10 sm:py-14 lg:h-[620px]">
            <div
              className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
              style={{
                borderRadius: "inherit",
                clipPath: "inset(0 round 12px)",
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
              }}
            >
              {/* TODO(video): Replace with final Montréal panorama loop (16:9, 1920x1080). Suggested subject: downtown skyline, river approach, or city arrival footage. */}
              <HeroBackgroundMedia
                poster={homeContent.hero.image.src}
                posterAlt={homeContent.hero.image.alt}
                videoMp4Src={homeContent.hero.video.mp4Src}
                videoWebmSrc={homeContent.hero.video.webmSrc}
              />
              <div className="absolute inset-0 z-10 rounded-[inherit]" style={{ background: "linear-gradient(110deg, rgba(8, 14, 44, 0.88) 0%, rgba(20, 32, 130, 0.74) 38%, rgba(8, 14, 44, 0.5) 100%)" }} />
              <div className="absolute inset-0 z-10 rounded-[inherit] bg-[linear-gradient(180deg,rgba(6,11,34,0.12),rgba(6,11,34,0.38))]" />
            </div>

            <Reveal className="relative z-20" once>
              <div className="mx-auto max-w-4xl text-center">
                <p className="inline-flex rounded-[999px] border border-white/20 bg-[rgba(7,15,49,0.5)] px-3 py-1 text-[11px] font-semibold tracking-[0.05em] text-[#e5edff] backdrop-blur-sm">
                  {homeContent.hero.eyebrow}
                </p>
                <div aria-hidden className="mx-auto mt-4 h-px max-w-[14rem] bg-[linear-gradient(90deg,transparent,var(--accent-2),transparent)]" />
                <h1 className="mx-auto mt-5 max-w-3xl font-display text-[2.35rem] leading-[0.97] text-white sm:text-[3.6rem]">{homeContent.hero.title}</h1>
                <p className="mx-auto mt-4 max-w-3xl text-[1.02rem] font-semibold leading-snug text-[#d5e2ff] sm:text-[1.45rem]">{homeContent.hero.accent}</p>
                <p className="mx-auto mt-4 max-w-2xl text-[0.96rem] leading-relaxed text-[#eef3ff] sm:text-[1.02rem]">{homeContent.hero.description}</p>
                <div className="mt-12 flex flex-wrap justify-center gap-2.5">
                  <LiquidButton
                    className="border-white/50 bg-[rgba(8,14,44,0.52)] px-4 py-2.5 text-[13px] hover:border-white/65 hover:bg-[rgba(255,255,255,0.18)]"
                    href={homeContent.hero.primaryCta.href}
                    label={homeContent.hero.primaryCta.label}
                    variant="inverseGhost"
                  />
                  <LiquidButton
                    className="border-white/50 bg-[rgba(8,14,44,0.52)] px-4 py-2.5 text-[13px] hover:border-white/65 hover:bg-[rgba(255,255,255,0.18)]"
                    href={homeContent.hero.secondaryCta.href}
                    label={homeContent.hero.secondaryCta.label}
                    variant="inverseGhost"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className={sectionSpacing} id="glance" spacing="none">
        <Container>
          <AtAGlancePlate
            conferenceStartIso={homeContent.hero.conferenceStartIso}
            countdownHeading={homeContent.hero.countdownHeading}
            items={homeContent.atGlance.items}
            label={homeContent.atGlance.label}
            photoAlt="Delegates in session at SSUNS"
            photoSrc="/photos/delegates(11).JPG"
            photoSlides={[
              { src: "/photos/delegates(11).JPG", alt: "Delegates in session at SSUNS" },
              { src: "/photos/delegates(3).JPG", alt: "Delegates debating during session" },
              { src: "/photos/chairs.JPG", alt: "Chairs preparing committee proceedings" },
              { src: "/photos/gala(2).JPG", alt: "The Delegate Gala social event" },
            ]}
            stats={homeContent.hero.stats}
          />
        </Container>
      </Section>

      <Section className={sectionSpacing} id="key-dates" spacing="none">
        <Container>
          <Reveal once>
            <div className="overflow-hidden rounded-[12px] border border-[var(--rule-strong)] shadow-[var(--shadow-strong)] lg:grid lg:grid-cols-[0.48fr_0.52fr]">
              <article className="rounded-none border-0 bg-[var(--panel-inverse)] p-6 text-white sm:p-8" id="register">
                <p className="section-kicker text-[#b4caff]">{homeContent.registrationBand.label}</p>
                <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight sm:text-[2rem]">{homeContent.registrationBand.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#dfe8ff] sm:text-base">{homeContent.registrationBand.body}</p>
                <LiquidButton className="mt-6" href={homeContent.registrationBand.cta.href} label={homeContent.registrationBand.cta.label} variant="inverse" />
              </article>

              <RegistrationVideoPanel />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className={sectionSpacing} id="mission" spacing="none">
        <Container>
          <div className="grid gap-8 md:gap-10 xl:grid-cols-[0.56fr_0.44fr] xl:items-stretch">
              <Reveal delay={80} once>
                <article className="theme-panel paper-grain h-full overflow-hidden p-4 sm:p-5">
                <p className="section-kicker">{homeContent.directorNote.label}</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-[0.72fr_1.28fr] sm:items-start">
                  <DossierFigure alt={homeContent.directorNote.image.alt} ratio="4/5" src={homeContent.directorNote.image.src} />
                  <div>
                    <h3 className="text-[1.6rem] font-semibold leading-tight text-[var(--accent)]">{homeContent.directorNote.title}</h3>
                    <div className="mt-2.5 space-y-2.5 text-sm leading-relaxed text-[var(--text)]">
                      {secretaryLetterPreview.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <button
                      aria-haspopup="dialog"
                      className="mt-4 text-sm font-semibold text-[var(--accent)]"
                      onClick={() => setIsSecretaryLetterOpen(true)}
                      type="button"
                    >
                      {language === "fr" ? "Lire la suite" : "Read more"}
                    </button>
                    <div className="mt-4 border-t border-[var(--rule)] pt-3">
                      <p className="font-accent text-2xl text-[var(--accent)]">{homeContent.directorNote.signature}</p>
                      <p className="mt-2 text-xs font-semibold text-[var(--muted)]">{homeContent.directorNote.role}</p>
                      {secretaryGeneralEmail ? (
                        <a className="mt-2 inline-flex text-xs font-semibold text-[var(--accent)] underline-offset-4 hover:underline" href={`mailto:${secretaryGeneralEmail}`}>
                          {secretaryGeneralEmail}
                        </a>
                      ) : null}
                      <p className="mt-3 inline-flex border border-[var(--rule)] px-3 py-1 text-[10px] font-semibold text-[var(--muted)]">{homeContent.directorNote.stamp}</p>
                    </div>
                  </div>
                </div>
                </article>
              </Reveal>

              <Reveal delay={160} once>
                <div className="grid h-full gap-4 xl:grid-rows-[1fr_auto]">
                  <article className="theme-panel-strong paper-grain p-4 sm:p-5">
                  <p className="section-kicker">{homeContent.conferenceStandard.label}</p>
                  <div className="mt-4 space-y-4 border-t border-[var(--rule)] pt-4">
                    {homeContent.conferenceStandard.sections.map((section) => (
                      <article className="grid gap-2.5 md:grid-cols-[0.28fr_0.72fr]" key={section.title}>
                        <div>
                          <p className="text-xs font-semibold text-[var(--muted)]">{section.label}</p>
                        </div>
                        <div>
                          <h3 className="text-[1rem] font-semibold leading-tight text-[var(--accent)] sm:text-[1.08rem]">{section.title}</h3>
                          <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--text)] sm:text-[0.89rem]">{section.body}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                  </article>

                  <article className="rounded-[10px] border border-[#23379f] bg-[var(--panel-inverse)] p-4 text-white shadow-[var(--shadow-soft)] sm:p-5">
                  <p className="section-kicker text-[#b4caff]">{homeContent.conferenceStandard.policyCallout.label}</p>
                  <h3 className="mt-3 text-[1.45rem] font-semibold leading-tight">{homeContent.conferenceStandard.policyCallout.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-[#dbe6ff] sm:text-[0.92rem]">{homeContent.conferenceStandard.policyCallout.body}</p>
                  <LiquidButton
                    className="mt-4"
                    href={homeContent.conferenceStandard.policyCallout.cta.href}
                    label={homeContent.conferenceStandard.policyCallout.cta.label}
                    variant="inverse"
                  />
                  </article>
                </div>
              </Reveal>
          </div>
        </Container>
      </Section>

      <SecretaryLetterModal
        body={homeContent.directorNote.body}
        email={secretaryGeneralEmail}
        imageAlt={homeContent.directorNote.image.alt}
        imageSrc={homeContent.directorNote.image.src}
        onClose={() => setIsSecretaryLetterOpen(false)}
        open={isSecretaryLetterOpen}
        role={homeContent.directorNote.role}
        signature={homeContent.directorNote.signature}
        title={homeContent.directorNote.title}
      />

      <Section className={sectionSpacing} id="committees-preview" spacing="none">
        <Container>
          <div className="space-y-6 md:space-y-8">
            <Reveal once>
              <div className="rounded-[10px] border border-[var(--rule)] bg-[var(--bg-alt)] px-5 py-6 sm:px-6 sm:py-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="section-kicker">{homeContent.featuredCommittees.label}</p>
                  <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[var(--accent)] sm:text-5xl">{homeContent.featuredCommittees.title}</h2>
                </div>
                <Link className="border-b border-[var(--accent-2)] pb-1 text-sm font-semibold tracking-[0.02em] text-[var(--accent)]" href="/committees">
                  {homeContent.featuredCommittees.ctaLabel}
                </Link>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{homeContent.featuredCommittees.intro}</p>
              </div>
            </Reveal>
            <Reveal delay={80} once>
              <div className="mt-6 grid gap-4 xl:grid-cols-3">
                {featuredCommittees.map((committee) => (
                  <article className="group relative overflow-hidden border border-[var(--rule)] bg-[var(--panel)] transition-colors duration-300 hover:border-[var(--accent)]" key={committee.slug}>
                    <CommitteeImage alt={`${committee.name} committee image`} mode="card" slug={committee.slug} src={committee.imageSrc} />
                    <div className="p-5">
                      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <p className="section-kicker">{committee.theme}</p>
                      <h3 className="mt-4 text-3xl font-semibold leading-tight text-[var(--accent)]">{committee.name}</h3>
                      <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold text-[var(--muted)]">
                        <span className="border border-[var(--rule)] px-2 py-1">{committee.level}</span>
                        <span className="border border-[var(--rule)] px-2 py-1">{committee.size}</span>
                        <span className="border border-[var(--rule)] px-2 py-1">{committee.format}</span>
                      </div>
                      <p className="mt-5 text-sm leading-relaxed text-[var(--text)]">{committee.note}</p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{committee.topic}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-[var(--rule)] pt-4">
                        <Link className="text-sm font-semibold tracking-[0.02em] text-[var(--accent)]" href={`/committees/${committee.slug}`}>
                          {committeesPageContent.openDetailsLabel}
                        </Link>
                        <span aria-hidden className="h-px w-10 bg-[var(--accent)] transition-all duration-300 group-hover:w-14" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className={sectionSpacing} id="venue" spacing="none">
        <Container>
          <Reveal once>
            <div>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-kicker">{homeContent.gallery.label}</p>
                <h2 className="mt-3 text-4xl font-semibold leading-tight text-[var(--accent)] sm:text-5xl">{homeContent.gallery.title}</h2>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-[var(--muted)]">{homeContent.gallery.scrollHint}</p>
                <Link className="mt-2 inline-block border-b border-[var(--accent-2)] pb-1 text-sm font-semibold tracking-[0.02em] text-[var(--accent)]" href={homeContent.gallery.cta.href}>
                  {homeContent.gallery.cta.label}
                </Link>
              </div>
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{homeContent.gallery.intro}</p>
            <EditorialGallery className="mt-6" compact items={homeGalleryItems} />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className={sectionSpacing} spacing="none">
        <Container>
          <Reveal once>
            <LandAcknowledgementBlock
              body={homeContent.landAcknowledgement.body}
              collapseLabel={homeContent.landAcknowledgement.collapseLabel}
              contactLine={homeContent.landAcknowledgement.contactLine}
              expandLabel={homeContent.landAcknowledgement.expandLabel}
              resources={homeContent.landAcknowledgement.resources}
              resourcesTitle={homeContent.landAcknowledgement.resourcesTitle}
              title={homeContent.landAcknowledgement.title}
            />
          </Reveal>
        </Container>
      </Section>

    </>
  );
}
