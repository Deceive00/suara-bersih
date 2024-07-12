export interface CREATE_POST_SUBPAGE {
  number: number;
  progress: number;
  name: string;
}

export const SUBPAGE_ATTRIBUTES : CREATE_POST_SUBPAGE[]= [
  {
    number: 1,
    progress: 33,
    name: 'Add Post Details'
  },
  {
    number: 2,
    progress: 66,
    name: 'Choosing a Thread'
  },
  {
    number: 3,
    progress: 100,
    name: 'Confirmation of Post'
  }
]