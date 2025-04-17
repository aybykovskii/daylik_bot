import { CallbackData } from './callbackData'

export const userRequestResultCD = new CallbackData('Result: {result}')
export const confirmCreationCD = new CallbackData('confirmCreation: {eventId}')
export const rejectCreationCD = new CallbackData('rejectCreation: {eventId}')
export const confirmDeletionCD = new CallbackData('confirmDeletion: {eventId}')
export const rejectDeletionCD = new CallbackData('rejectDeletion: {eventId}')

export const refundCreationCD = new CallbackData('refundCreation: {paymentId}')
