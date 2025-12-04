import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

if (!projectId) {
  console.warn('Warning: NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Sanity features will not work.');
}

// Only create client if projectId is provided, otherwise create a mock client
export const client = projectId 
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
    })
  : createClient({
      projectId: 'placeholder',
      dataset: 'production',
      apiVersion,
      useCdn: false,
    })
