import { Card } from '@/root/components/ui/CardGrid/Card'
import { MotionSimpleGrid } from '@/root/components/shared/MotionBox'

interface Props {
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
}

const cardGridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

export function CardGrid({ posts }: Props) {
  return (
    <MotionSimpleGrid
      animate="show"
      initial="hidden"
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(auto, 420px))"
      variants={cardGridVariants}
    >
      {posts.map(({ category, title, slug }) => (
        <Card key={slug} category={category} slug={slug} title={title} />
      ))}
    </MotionSimpleGrid>
  )
}
