import { VStack } from "@chakra-ui/react";
import Product from "../Product";
import { ProductsContext } from "../../providers/products";
import { useContext } from "react";
const ProductList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <VStack
      spacing={8}
      p={4}
      bgColor={"whiteAlpha.900"}
      h={"100%"}
      w={["90%"]}
      as={"main"}
      maxW={"1000px"}
      boxShadow={"0px 0px 10px black"}
      overflowY={"auto"}
    >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </VStack>
  );
};

export default ProductList;
