/* eslint-disable max-params */
import { CSSProperties, ReactElement, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import {
  AspectRatio,
  Box,
  Icon,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import './style.css';

type ImgSliderPropsT = {
  images: string[];
  fallback?: ReactElement;
};

export const ImgSlider = ({ images, fallback }: ImgSliderPropsT) => {
  const BulletColor = useColorModeValue('gray', 'white');
  const [image, setImage] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const indicatorStyles: CSSProperties = {
    background: BulletColor,
    width: 10,
    height: 10,
    display: 'inline-block',
    margin: '0 8px',
    borderRadius: '50%',
    outline: 'none',
    opacity: '.7',
  };

  return (
    <Box>
      <Carousel
        infiniteLoop
        centerMode
        centerSlidePercentage={70}
        showStatus={false}
        showThumbs={false}
        autoPlay={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <IconButton
              type="button"
              onClick={onClickHandler}
              title={label}
              aria-label="left-arrow"
              icon={<Icon as={FiChevronLeft} h={6} w={6} ml="-2px" />}
              position="absolute"
              top="50%"
              left={2}
              zIndex="2"
              transform="translateY(-50%)"
            />
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <IconButton
              type="button"
              onClick={onClickHandler}
              title={label}
              aria-label="right-arrow"
              icon={<Icon as={FiChevronRight} h={6} w={6} mr="-2px" />}
              position="absolute"
              top="50%"
              right={2}
              zIndex="2"
              transform="translateY(-50%)"
            />
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          // eslint-disable-line max-params
          return (isSelected) ? (
            <li
              style={{ ...indicatorStyles, background: '#000' }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
            ) : (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {images?.map((src: string, idx: number) => (
          <AspectRatio
            mx={4}
            my={6}
            ratio={4 / 3}
            key={idx}
            cursor="pointer"
            overflow="hidden"
            borderRadius="2xl"
            boxShadow="sm"
            onClick={() => {
              setImage(src);
              onOpen();
            }}
          >
            <Image src={src} alt={`Property image #${idx}`} fallback={fallback} />
          </AspectRatio>
        ))}
      </Carousel>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" scrollBehavior="inside" isCentered>
        <ModalOverlay />
        <ModalContent h="auto" borderRadius={25} overflow="hidden">
          <Icon
            pos="absolute"
            top={10}
            left={10}
            h={8}
            w={8}
            p={1}
            as={FiX}
            cursor="pointer"
            onClick={onClose}
            borderRadius="full"
            boxShadow="base"
            layerStyle="iconColor"
          />
          <ModalBody p={0}>
            <Image
              w="100%"
              maxW="800px"
              maxH="600px"
              src={image}
              alt="property_image"
              fallback={fallback}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
