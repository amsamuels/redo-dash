import { useState } from 'react';
import { LinkCreateForm } from '@/components/dashboard/link-create-form';

export function LinkCreateFormSection() {
  const [links, setLinks] = useState<any[]>([]);

  const handleCreateLink = async (newLink: any) => {
    try {
      const res = await fetch('/api/links', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLink),
      });

      if (!res.ok) throw new Error('Failed to create link');
      const createdLink = await res.json();
      setLinks([createdLink, ...links]);
    } catch (err) {
      console.error('Error creating link:', err);
    }
  };

  return <LinkCreateForm onCreateLink={handleCreateLink} />;
}