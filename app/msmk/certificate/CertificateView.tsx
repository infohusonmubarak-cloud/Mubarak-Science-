'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface CertificateViewProps {
  fullName: string;
  accessCode: string;
  completionDate: string;
  verificationId: string;
}

const COURSE_TITLE = 'Nursing, Self-Care & Family Care';
const ROHINGYA_LABEL = '𐴀𐴞𐴕𐴠𐴑 𐴃𐴡𐴓𐴡𐴌';

async function downloadPdf(props: CertificateViewProps) {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();

  doc.setDrawColor(220, 38, 38);
  doc.setLineWidth(3);
  doc.rect(24, 24, w - 48, h - 48);
  doc.setLineWidth(1);
  doc.rect(34, 34, w - 68, h - 68);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(80, 80, 80);
  doc.text('MUBARAK SCIENCE MEDICAL KNOWLEDGE', w / 2, 90, { align: 'center' });

  doc.setFontSize(26);
  doc.setTextColor(20, 20, 20);
  doc.text('Certificate of Completion', w / 2, 130, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(13);
  doc.setTextColor(90, 90, 90);
  doc.text('This certifies that', w / 2, 175, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(30);
  doc.setTextColor(20, 20, 20);
  doc.text(props.fullName, w / 2, 215, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(13);
  doc.setTextColor(90, 90, 90);
  doc.text('has successfully completed the course', w / 2, 245, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(220, 38, 38);
  doc.text(COURSE_TITLE, w / 2, 275, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(110, 110, 110);
  doc.text(`Access Code: ${props.accessCode}`, w / 2 - 140, h - 70);
  doc.text(`Date: ${props.completionDate}`, w / 2, h - 70, { align: 'center' });
  doc.text(`Verification ID: ${props.verificationId}`, w / 2 + 140, h - 70, { align: 'right' });

  doc.setFontSize(9);
  doc.text(
    'This certificate confirms training-support course completion. It does not replace certified in-person medical or first-aid training.',
    w / 2,
    h - 45,
    { align: 'center' }
  );

  doc.save(`MSMK-Certificate-${props.accessCode}.pdf`);
}

export function CertificateView(props: CertificateViewProps) {
  const [generating, setGenerating] = useState(false);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="text-center">
        <p className="text-4xl">🏆</p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
          Congratulations, {props.fullName}!
        </h1>
      </div>

      <div className="rounded-2xl border-4 border-double border-msmk-firstaid bg-surface p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
          Mubarak Science Medical Knowledge
        </p>
        <p dir="rtl" lang="rhg" className="mt-1 text-sm text-foreground-muted">
          {ROHINGYA_LABEL}
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
          Certificate of Completion
        </h2>
        <p className="mt-4 text-sm text-foreground-muted">This certifies that</p>
        <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-msmk-firstaid">{props.fullName}</p>
        <p className="mt-2 text-sm text-foreground-muted">has successfully completed</p>
        <p className="mt-1 text-lg font-semibold text-foreground">Nursing, Self-Care &amp; Family Care</p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-foreground-muted">
          <span>Access Code: {props.accessCode}</span>
          <span>Date: {props.completionDate}</span>
          <span>Verification ID: {props.verificationId}</span>
        </div>
      </div>

      <p className="text-center text-xs text-foreground-muted">
        This certificate confirms training-support course completion. It does not replace certified in-person
        medical or first-aid training.
      </p>

      <div className="flex justify-center">
        <Button
          disabled={generating}
          onClick={async () => {
            setGenerating(true);
            try {
              await downloadPdf(props);
            } finally {
              setGenerating(false);
            }
          }}
        >
          {generating ? 'Preparing…' : 'Download PDF'}
        </Button>
      </div>
    </div>
  );
}
