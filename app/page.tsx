import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Dynamic and result-oriented DevOps Engineer with 4+ years of experience in designing, implementing,
          and maintaining scalable infrastructure solutions, complemented by a strong technical support
          background. Proficient in CI/CD implementation, cloud platforms, and containerization using Docker
          and Kubernetes. Skilled in automating deployments, monitoring, and optimizing infrastructure. Adept
          at scripting and automation with tools like Jenkins, Terraform and Ansible, adhering to delivery best
          practices.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
