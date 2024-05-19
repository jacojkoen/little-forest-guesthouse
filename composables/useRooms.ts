const rates = useRates()

export const useRooms = () => {
  const roomZanzibar = useState(
    'roomZanzibar',
    (): IRoom => ({
      name: 'Zanzibar Garden Suite',
      banner:
        'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Zanzibar-Garden-Suite.jpg',
      gallery: [
        'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-98.jpg',
        'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-105.jpg',
        'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-108.jpg',
        'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-109.jpg',
        'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-111.jpg',
      ],
      price: rates.pricePremium.value,
      capacity: 2,
      link: '/accommodation/zanzibar-garden-suite',
      description:
        'Opulent with an extra length kingsize bed, slipper bath and shower, full DSTV.',
      features: [
        'Separate entrance with its own outside seating area and daybed',
        'Luxurious room with high ceilings and extra length king-size bed',
        'Bathroom with shower and slipper bath',
        'Fridge and microwave in each room',
        'Flat screen TV and DSTV with own remote',
        'Well lit working area',
        'Free Wi-Fi',
      ],
    }),
  )

  const roomMali = useState(
    'roomMali',
    (): IRoom => ({
      name: 'Mali Garden Suite',
      banner:
        'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Mali-Garden-Suite.jpg',
      price: rates.pricePremium.value,
      capacity: 2,
      gallery: [
        'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-80.jpg',
        'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Mali-Bathroom-752x450_c.jpg',
      ],
      link: '/accommodation/mali-garden-suite',
      description:
        'Romantic with an extra length fourposter bed, slipper bath and shower, full DSTV.',
      features: [
        'Separate entrances each with its own outside seating area overlooking the tranquil fish pond',
        'Luxurious rooms with high ceilings and extra length king-size beds',
        'Bathroom with shower and slipper bath',
        'Fridge and microwave in each room',
        'Flat screen TV and DSTV with own remote',
        'Well lit working area',
        'Free Wi-Fi',
      ],
    }),
  )

  const roomPool = useState(
    'roomPool',
    (): IRoom => ({
      name: 'The Pool Cottage',
      banner:
        'https://littleforestguesthouse.co.za/wp-content/uploads/2024/05/pool-cottage.png',
      price: rates.pricePool.value,
      capacity: 4,
      gallery: [
        'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-117.jpg',
        'https://littleforestguesthouse.co.za/wp-content/uploads/2016/01/Little-Forest-119.jpg',
      ],
      link: '/accommodation/the-pool-cottage',
      description:
        'Ideal for families, pet friendly, own swimming pool. Smart TV. Self catering facilities.',
      features: [
        'Walled, dog friendly. Small to medium size dogs are welcome at R50 per dog per night',
        'Swimming pool',
        'Braai facilities',
        'Fully equipped kitchen with dining area',
        'Bathroom with shower',
        'King size bed downstairs can be changed to two single beds',
        'Double bed and single bed upstairs',
        'Well lit working area',
        'Smart TV',
        'Free Wifi',
      ],
    }),
  )

  const roomCopper = useState(
    'roomCopper',
    (): IRoom => ({
      name: 'Copper House',
      banner:
        'https://littleforestguesthouse.co.za/wp-content/uploads/2024/05/copper.png',
      price: rates.priceCopper.value,
      capacity: 4,
      gallery: [
        'https://littleforestguesthouse.co.za/wp-content/uploads/2024/05/copper.png',
        'https://littleforestguesthouse.co.za/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-05-at-21.20.23-1-752x450_c.jpeg',
      ],
      link: '/accommodation/copper-house',
      description:
        'Charming. Ideal for families. Self catering facilities. Fenced, dog friendly (small to medium size dogs).',
      features: [
        'Walled, dog friendly. Small to medium size dogs are welcome at R50 per dog per night.',
        'Separate entrance with outside seating area',
        'Two bedrooms; first bedroom has 2 single beds inter-leading to second bedroom with a king size bed',
        'Fully equipped kitchen with dining area',
        'Bathroom with shower and slipper bath',
        'Flat screen TV and DSTV with own remote',
        'Well lit working area',
        'Free Wifi',
      ],
    }),
  )

  const roomGiraffe = useState(
    'roomGiraffe',
    (): IRoom => ({
      name: 'Giraffe Garden Suite',
      banner:
        'https://littleforestguesthouse.co.za/wp-content/uploads/2024/05/giraffe.png',
      price: rates.priceGiraffe.value,
      capacity: 3,
      gallery: [
        'https://littleforestguesthouse.co.za/wp-content/uploads/2024/05/giraffe.png',
        'https://littleforestguesthouse.co.za/wp-content/uploads/2024/05/WhatsApp-Image-2024-04-30-at-11.20.24-752x450_c.jpeg',
      ],
      link: '/accommodation/giraffe-garden-suite',
      description: 'Spacious unit with a balcony overlooking the garden.',
      features: [
        'Separate bedroom with a queen size bed and lots of cupboard space',
        'Pajama lounge with a comfortable single bed and desk',
        'Bathroom with a skylight shower',
        'Microwave, fridge, coffee/tea station',
        'Free Wifi',
        'Flat screen TV, with DSTV',
      ],
    }),
  )

  const rooms = useState('roomsAll', () => ({
    'zanzibar-garden-suite': roomZanzibar.value,
    'mali-garden-suite': roomMali.value,
    'the-pool-cottage': roomPool.value,
    'copper-house': roomCopper.value,
    'giraffe-garden-suite': roomGiraffe.value,
  }))

  return {
    roomZanzibar,
    roomMali,
    roomPool,
    roomCopper,
    roomGiraffe,
    rooms,
  }
}
