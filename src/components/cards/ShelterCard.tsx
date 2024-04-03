import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Vector from "@/assets/images/Vector.svg";
import HeartImg from "@/assets/images/heart-regular 1.svg";

interface ImageUrl {
  url: string;
  alt: string;
}

const ShelterCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls: ImageUrl[] = [
    { url: "https://bit.ly/2Z4KKcF", alt: "shelter image 1" },
    { url: "https://example.com/image2.jpg", alt: "shelter image 2" },
    { url: "https://example.com/image3.jpg", alt: "shelter image 3" },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <Box borderWidth="1px" borderRadius="lg">
        {" "}
        <Box
          width={[300, 380, 420]}
          position="relative"
          height={[180, 200, 250]}
          bg={"gray.100"}
          objectFit={"cover"}
        >
          <Image
            src={imageUrls[currentIndex].url}
            alt={imageUrls[currentIndex].alt}
            height={"100%"}
            width={"100%"}
            borderRadius={"10px 10px 0 0"}
          />
          <Box position={"absolute"} top={"5%"} left={"85%"}>
            <Image src={HeartImg} alt="heart" />
          </Box>

          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="flex"
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Image src={Vector} alt="Prev button" onClick={handlePrevClick} />
            <Button onClick={handleNextClick}>next</Button>
          </Box>
        </Box>
        <Box p="4" marginTop={-3}>
          <Box color="gray.500" fontSize={"sm"}>
            Last updated <Text as={"b"}>Today,</Text> 09:35am
          </Box>

          <Box
            mt="2"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
            mb={1}
          >
            Cindy Family Foundation Cooperation
          </Box>

          <Box color="gray.500" fontSize={"sm"} as="span">
            Emergency Shelter
            <Box as={"span"}> | Youth (minor)</Box>
          </Box>

          <Box display="flex" mt="4" alignItems="center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
            >
              <path
                d="M1.25 2.17188C1.25 1.13672 2.08984 0.296875 3.125 0.296875H16.875C17.9102 0.296875 18.75 1.13672 18.75 2.17188V7.21484C18.1836 6.88672 17.5508 6.66797 16.875 6.58594C16.875 6.57422 16.875 6.55859 16.875 6.54688V5.29688C16.875 4.60547 16.3164 4.04688 15.625 4.04688H11.875C11.1836 4.04688 10.625 4.60547 10.625 5.29688V6.54688H9.375V5.29688C9.375 4.60547 8.81641 4.04688 8.125 4.04688H4.375C3.68359 4.04688 3.125 4.60547 3.125 5.29688V6.54688C3.125 6.55859 3.125 6.57422 3.125 6.58594C2.44922 6.67188 1.8125 6.89062 1.25 7.21484V2.17188ZM0 11.5469C0 9.47656 1.67969 7.79688 3.75 7.79688H16.25C18.3203 7.79688 20 9.47656 20 11.5469V16.5469C20 17.2383 19.4414 17.7969 18.75 17.7969C18.0586 17.7969 17.5 17.2383 17.5 16.5469V15.2969H2.5V16.5469C2.5 17.2383 1.94141 17.7969 1.25 17.7969C0.558594 17.7969 0 17.2383 0 16.5469V11.5469Z"
                fill="#F55D3E"
              />
            </svg>
            <Box as="span" ml="2" fontSize="sm">
              7 out of 12 beds available
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ShelterCard;
