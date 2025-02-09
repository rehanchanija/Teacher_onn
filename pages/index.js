
import { getTutor } from "@/api/tutor.api";
import Homepage from "@/components";

import { dehydrate, QueryClient } from '@tanstack/react-query'

export default function Home() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient()

//   await queryClient.prefetchQuery({
//     queryKey: ['GET_TUTOR'],
//     queryFn: () => getTutor(),
//   })

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }

