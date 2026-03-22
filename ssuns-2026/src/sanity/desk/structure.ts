import type { StructureResolver } from "sanity/structure";

const chapterGroups = [
  { title: "About", parentSlug: "about" },
  { title: "Conference", parentSlug: "conference" },
  { title: "Registration", parentSlug: "registration" },
  { title: "Resources", parentSlug: "resources" },
  { title: "Committees", parentSlug: "committees" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("page").title("Pages"),
      S.listItem()
        .title("Chapters")
        .child(
          S.list()
            .title("Chapters")
            .items(
              chapterGroups.map((group) =>
                S.listItem()
                  .title(group.title)
                  .child(
                    S.documentList()
                      .title(group.title)
                      .schemaType("chapter")
                      .filter('_type == "chapter" && parentSlug == $parentSlug')
                      .params({ parentSlug: group.parentSlug }),
                  ),
              ),
            ),
        ),
      S.documentTypeListItem("secretariatMember").title("Secretariat"),
      S.documentTypeListItem("committee").title("Committees"),
      S.documentTypeListItem("resourceLink").title("Resources"),
      S.documentTypeListItem("sponsor").title("Sponsors"),
    ]);
