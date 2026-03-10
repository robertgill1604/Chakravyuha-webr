import { eventConfig } from "@/config/eventConfig";

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatShortDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatDateWithTime(dateString: string, timeString: string): string {
  return `${formatShortDate(dateString)} at ${timeString}`;
}

export function getEventDate(): string {
  if (eventConfig.showDateAsTBA) {
    return "To be announced";
  }
  return formatDate(eventConfig.date);
}

export function getEventShortDate(): string {
  if (eventConfig.showDateAsTBA) {
    return "To be announced";
  }
  return formatShortDate(eventConfig.date);
}

export function getRegistrationDeadline(): string {
  if (eventConfig.showDeadlineAsTBA) {
    return "To be announced";
  }
  return formatShortDate(eventConfig.registrationDeadline);
}

export function getShortlistDate(): string {
  if (eventConfig.showDeadlineAsTBA) {
    return "To be announced";
  }
  return formatShortDate(eventConfig.shortlistDate);
}

export function getPaymentDeadline(): string {
  if (eventConfig.showDeadlineAsTBA) {
    return "To be announced";
  }
  return formatShortDate(eventConfig.paymentDeadline);
}

export function isEventPostponed(): boolean {
  return eventConfig.isPostponed === true;
}

export function getPostponeMessage(): string {
  return eventConfig.postponeMessage || "The event has been postponed. New dates will be announced soon.";
}
