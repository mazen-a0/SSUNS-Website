import { CommitteesExplorer } from "@/components/CommitteesExplorer";
import { PageHero } from "@/components/PageHero";
import { committees, committeesPageContent } from "@/content/en/committees";
import { uiText } from "@/content/en/site";

export default function CommitteesPage() {
  return (
    <>
      <PageHero intro={committeesPageContent.intro} title={committeesPageContent.title} />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <CommitteesExplorer closeLabel={uiText.closeModal} committees={committees} />
      </section>
    </>
  );
}
