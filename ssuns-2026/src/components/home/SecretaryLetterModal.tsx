"use client";

import { BioLetterModal } from "@/components/BioLetterModal";
import { useSiteContent } from "@/lib/useSiteContent";

type SecretaryLetterModalProps = {
  open: boolean;
  onClose: () => void;
  kicker?: string;
  title: string;
  body: string[];
  imageSrc: string;
  imageAlt: string;
  signature: string;
  role: string;
  email?: string | null;
};

export function SecretaryLetterModal({
  open,
  onClose,
  kicker,
  title,
  body,
  imageSrc,
  imageAlt,
  signature,
  role,
  email,
}: SecretaryLetterModalProps) {
  const { language } = useSiteContent();

  return (
    <BioLetterModal
      email={email}
      headshotAlt={imageAlt}
      headshotSrc={imageSrc}
      kicker={kicker ?? (language === "fr" ? "Lettre du secrétariat" : "Letter")}
      name={signature}
      onClose={onClose}
      open={open}
      signatureName={signature}
      signatureRole={role}
      title={title}
    >
      {body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </BioLetterModal>
  );
}
