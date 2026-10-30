const APP_URL = 'https://bcbr-quiz-app.vercel.app/';

/** Opens the native share sheet when available, otherwise copies the link. */
export async function shareApp(): Promise<'shared' | 'copied' | 'failed'> {
  const data = {
    title: 'BCBR QBank',
    text: 'Free BCBR prep: 1000+ past year questions, flashcards and AI explanations.',
    url: APP_URL,
  };
  try {
    if (navigator.share) {
      await navigator.share(data);
      return 'shared';
    }
    await navigator.clipboard.writeText(`${data.text} ${data.url}`);
    return 'copied';
  } catch (err) {
    // Dismissing the share sheet is not a failure worth surfacing.
    return (err as DOMException)?.name === 'AbortError' ? 'shared' : 'failed';
  }
}
