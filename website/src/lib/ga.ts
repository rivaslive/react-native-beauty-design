// log the page view with their URL
export const pageView = (url: string) => {
  // @ts-ignore
  window?.gtag('config', `${process.env.NEXT_PUBLIC_GTAG_ID as string}`, {
    page_path: url,
  });
};

// log specific events happening.
interface EventProps {
  action: string;
  params: any;
}

export const event = ({ action, params }: EventProps) => {
  // @ts-ignore
  window?.gtag('event', action, params);
};

interface EventPushProps {
  event: 'get-staring' | 'click' | 'recordSubmitted' | 'formSubmitted';
}

export const push = ({ event }: EventPushProps) => {
  // @ts-ignore
  window?.dataLayer?.push({
    event,
  });
};
