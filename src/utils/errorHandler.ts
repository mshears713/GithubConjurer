/**
 * Error Handler Utility
 *
 * Centralized error handling for the application.
 * Logs errors and provides user-friendly error messages.
 */

import logger from './logger';

export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public userMessage?: string,
    public recoverable = true
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function handleError(error: unknown, context?: string): AppError {
  const contextMsg = context ? `[${context}] ` : '';

  if (error instanceof AppError) {
    logger.error(`${contextMsg}${error.message}`, error, { code: error.code });
    return error;
  }

  if (error instanceof Error) {
    logger.error(`${contextMsg}${error.message}`, error);
    return new AppError(
      error.message,
      'UNKNOWN_ERROR',
      'An unexpected error occurred. Please try again.',
      true
    );
  }

  const message = String(error);
  logger.error(`${contextMsg}${message}`);
  return new AppError(
    message,
    'UNKNOWN_ERROR',
    'An unexpected error occurred. Please try again.',
    true
  );
}

export function catchAndLog(error: unknown, context: string) {
  handleError(error, context);
}
