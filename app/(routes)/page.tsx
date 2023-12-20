import getBillboard from "@/actions/get-billboards"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/ui/billboard"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"

export const revalidate = 0

const Homepage = async () => {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard("fb05be4b-cdad-4572-9c8e-45833236a535")

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default Homepage
