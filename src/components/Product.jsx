import React, { useState, useEffect } from 'react'
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  VStack,
  HStack,
  Image,
  Badge,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Center,
  Alert,
  AlertIcon,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  FormLabel,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { SearchIcon } from '@chakra-ui/icons'
import { FaFilter } from 'react-icons/fa'
import axios from 'axios'
import './TeamP.css'

const MotionBox = motion.create(Box)

function ProductCard({ title, price, description, brand, image }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <MotionBox
      bg="white"
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      borderColor="#a88768"
      overflow="hidden"
    >
      <Box position="relative">
        <Image
          src={image}
          alt={title}
          height="250px"
          width="100%"
          objectFit="cover"
          transition="0.3s all"
          filter={isHovered ? "blur(5px) brightness(1.2)" : "none"}
        />
        
        {/* Description Overlay on Hover */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="4"
          opacity={isHovered ? 1 : 0}
          transition="0.3s all"
          textAlign="center"
          bg={isHovered ? "rgba(255, 255, 255, 0.85)" : "transparent"}
        >
          <Text
            fontSize="sm"
            fontFamily="'Montserrat', sans-serif"
            lineHeight="1.6"
            maxHeight="200px"
            overflowY="auto"
            fontWeight="600"
            letterSpacing="0.2px"
            color="black"
            css={{
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#a88768',
                borderRadius: '4px',
              },
            }}
          >
            {description}
          </Text>
        </Box>
      </Box>

      <Box p={6}>
        <VStack spacing={2} align="start">
          <Text
            color="#473c38"
            fontSize="sm"
            textTransform="uppercase"
            fontFamily="'Montserrat', sans-serif"
            fontWeight="bold"
          >
            {brand}
          </Text>
          <Heading 
            size="md" 
            fontWeight="semibold"
            fontFamily="'Crimson Text', serif"
            color="#452811"
            noOfLines={2}
          >
            {title}
          </Heading>
          <Text
            color="#917357"
            fontSize="xl"
            fontWeight="bold"
            fontFamily="'Roboto Slab', serif"
          >
            ${price}
          </Text>
        </VStack>
      </Box>
    </MotionBox>
  )
}

function Product() {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  // Filter states
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [maxPrice, setMaxPrice] = useState(1000)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const api_url = import.meta.env.VITE_PRODUCTS_API
      const response = await axios.get(api_url)
      const productsData = response.data.products || response.data
      setProducts(productsData)
      
      // Set max price based on products
      const highestPrice = Math.max(...productsData.map(p => p.price))
      setMaxPrice(Math.ceil(highestPrice))
      setPriceRange([0, Math.ceil(highestPrice)])
      
      setLoading(false)
    } catch (err) {
      setError('Failed to fetch products. Please try again later.')
      setLoading(false)
      console.error('Error fetching products:', err)
    }
  }

  // Get unique brands and categories
  const brands = [...new Set(products.map(p => p.brand).filter(Boolean))]
  const categories = [...new Set(products.map(p => p.category).filter(Boolean))]

  // Safe search function
  const safeSearch = (text, searchTerm) => {
    if (!text) return false
    return text.toString().toLowerCase().includes(searchTerm.toLowerCase())
  }

  // Filter products
  const filteredProducts = products.filter(product => {
    if (!product) return false
    
    // Search query filter
    const matchesSearch = searchQuery.trim() === '' || 
      safeSearch(product.title, searchQuery) ||
      safeSearch(product.brand, searchQuery) ||
      safeSearch(product.description, searchQuery)

    // Brand filter
    const matchesBrand = !selectedBrand || product.brand === selectedBrand

    // Category filter
    const matchesCategory = !selectedCategory || product.category === selectedCategory

    // Price range filter
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

    return matchesSearch && matchesBrand && matchesCategory && matchesPrice
  })

  // Filter drawer component
  const FilterDrawer = () => (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader
          fontFamily="'Crimson Text', serif"
          color="#452811"
        >
          Filter Products
        </DrawerHeader>

        <DrawerBody>
          <VStack spacing={6} align="stretch">
            {/* Brand Filter */}
            <Box>
              <FormLabel
                color="#473c38"
                fontFamily="'Montserrat', sans-serif"
              >
                Brand
              </FormLabel>
              <Select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                placeholder="All Brands"
                borderColor="#a88768"
                _hover={{ borderColor: '#917357' }}
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </Select>
            </Box>

            {/* Category Filter */}
            <Box>
              <FormLabel
                color="#473c38"
                fontFamily="'Montserrat', sans-serif"
              >
                Category
              </FormLabel>
              <Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                placeholder="All Categories"
                borderColor="#a88768"
                _hover={{ borderColor: '#917357' }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </Select>
            </Box>

            {/* Price Range Filter */}
            <Box>
              <FormLabel
                color="#473c38"
                fontFamily="'Montserrat', sans-serif"
              >
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </FormLabel>
              <RangeSlider
                aria-label={['min', 'max']}
                min={0}
                max={maxPrice}
                value={priceRange}
                onChange={setPriceRange}
                colorScheme="brown"
              >
                <RangeSliderTrack bg="#a88768">
                  <RangeSliderFilledTrack bg="#917357" />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </Box>

            {/* Reset Filters Button */}
            <Button
              onClick={() => {
                setSelectedBrand('')
                setSelectedCategory('')
                setPriceRange([0, maxPrice])
              }}
              colorScheme="brown"
              bg="#473c38"
              color="white"
              _hover={{ bg: '#917357' }}
              mt={4}
            >
              Reset Filters
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )

  return (
    <Box py={12} className="product">
      <Container maxW="6xl">
        <VStack spacing={8} mb={12}>
          <Heading
            className="head"
            color="#452811"
            fontFamily="'Crimson Text', serif"
            fontSize={{ base: "2.5rem", md: "4rem" }}
            textAlign="center"
          >
            Our Products
          </Heading>
          
          {/* Search and Filter Section */}
          <HStack spacing={4} w="100%" maxW="600px" justify="center">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="#a88768" />
              </InputLeftElement>
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                size="lg"
                borderRadius="full"
                borderColor="#a88768"
                _hover={{ borderColor: '#917357' }}
                _focus={{
                  borderColor: '#917357',
                  boxShadow: '0 0 0 1px #917357',
                }}
                fontFamily="'Montserrat', sans-serif"
              />
            </InputGroup>
            <Button
              onClick={onOpen}
              size="lg"
              bg="#473c38"
              color="white"
              _hover={{ bg: '#917357' }}
              borderRadius="full"
              px={6}
            >
              <FaFilter />
            </Button>
          </HStack>

          {/* Active Filters Display */}
          {(selectedBrand || selectedCategory || priceRange[0] > 0 || priceRange[1] < maxPrice) && (
            <HStack spacing={2} flexWrap="wrap" justify="center">
              {selectedBrand && (
                <Badge colorScheme="brown" p={2} borderRadius="full">
                  Brand: {selectedBrand}
                </Badge>
              )}
              {selectedCategory && (
                <Badge colorScheme="brown" p={2} borderRadius="full">
                  Category: {selectedCategory}
                </Badge>
              )}
              <Badge colorScheme="brown" p={2} borderRadius="full">
                Price: ${priceRange[0]} - ${priceRange[1]}
              </Badge>
            </HStack>
          )}
        </VStack>

        {/* Products Grid */}
        {loading ? (
          <Center py={10}>
            <Spinner size="xl" color="#917357" thickness="4px" />
          </Center>
        ) : error ? (
          <Alert status="error" borderRadius="md">
            <AlertIcon />
            {error}
          </Alert>
        ) : filteredProducts.length === 0 ? (
          <Alert 
            status="info" 
            borderRadius="md"
            bg="#a88768"
            color="white"
          >
            <AlertIcon color="white" />
            No products found matching your criteria.
          </Alert>
        ) : (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            px={{ base: 4, md: 8 }}
          >
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                title={product.title || 'Untitled Product'}
                price={product.price || 0}
                description={product.description || 'No description available'}
                brand={product.brand || 'Unknown Brand'}
                image={product.thumbnail || product.images?.[0] || 'default-image-url'}
              />
            ))}
          </SimpleGrid>
        )}

        {/* Filter Drawer */}
        <FilterDrawer />
      </Container>
    </Box>
  )
}

export default Product
