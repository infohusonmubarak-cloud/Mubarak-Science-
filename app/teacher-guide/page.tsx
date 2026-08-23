import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ComingSoonPanel } from '@/components/content/ComingSoonPanel';

export const metadata: Metadata = { title: 'Teacher Guide' };

export default function TeacherGuidePage() {
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Teacher Guide' }]} />
      <div>
        <h1 className="text-2xl font-bold text-foreground">Teacher Guide</h1>
        <p className="mt-1 text-sm text-foreground-muted">
          A separate set of resources for teachers — learning objectives, suggested explanations, classroom
          activities, discussion questions, and answer keys for every concept.
        </p>
      </div>
      <ComingSoonPanel
        title="Teacher Guide"
        blurb="This section is planned but not built yet in this pass — it will sit alongside the learner content, concept by concept, without needing a separate app."
      />
    </div>
  );
}
