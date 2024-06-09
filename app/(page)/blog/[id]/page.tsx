export const runtime = 'edge';

const BlogArticlePage = ({ params }: { params: { id: string } }) => {
    return (
        <>
      <div className="container mx-auto py-5">
        <p className="text-[50px]">{params.id}</p>
      </div>
      <div className="text-[50px]">製作中</div>
      </>
    )
  }
  
  export default BlogArticlePage