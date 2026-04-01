"use client";

import { BioLetterModal } from "@/components/BioLetterModal";
import type { SecretariatMember } from "@/content/en/about";
import { useSiteContent } from "@/lib/useSiteContent";

type SecretariatModalProps = {
  member: SecretariatMember | null;
  onClose: () => void;
};

export function SecretariatModal({ member, onClose }: SecretariatModalProps) {
  const { language } = useSiteContent();

  if (!member) return null;

  const bio = member.bio?.trim() || (language === "fr" ? "Biographie disponible sur demande." : "Biography available on request.");

  return (
    <BioLetterModal
      email={member.email}
      headshotAlt={`${member.name} headshot`}
      headshotSrc={member.headshotSrc || "/headshots/marcus.jpg"}
      kicker={language === "fr" ? "Secrétariat" : "Secretariat"}
      name={member.name}
      onClose={onClose}
      open={Boolean(member)}
      showSignature={false}
      signatureName={member.name}
      signatureRole={member.role}
      title={member.name}
    >
      <p>{bio}</p>
    </BioLetterModal>
  );
}
