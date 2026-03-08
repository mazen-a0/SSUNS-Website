import { notFound } from "next/navigation";
import { CommitteeDetailSheet } from "@/components/CommitteeDetailSheet";
import { committees } from "@/content/en/committees";

type CommitteeDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return committees.map((committee) => ({ slug: committee.slug }));
}

export default async function CommitteeDetailPage({ params }: CommitteeDetailPageProps) {
  const { slug } = await params;
  const committee = committees.find((entry) => entry.slug === slug);

  if (!committee) {
    notFound();
  }

  return (
    <div className="animate-[sheet-in_420ms_ease-out]">
      <CommitteeDetailSheet slug={slug} />
    </div>
  );
}
