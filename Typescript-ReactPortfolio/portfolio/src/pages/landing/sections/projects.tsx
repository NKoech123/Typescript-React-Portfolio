import React from 'react'
import PFCard from '../../../foundation/PFCard/PFCard'
import {Flex, Text} from '@chakra-ui/react'
export const Projects = () => {
  return (
    <Flex mx='8.33%' mt='14.68%' mb='6.27%'>
      
        <Flex direction='column'>
                <Flex  mb= '20px' justifyContent='start' ml='60px'>
                    <Text  fontWeight='800'  fontSize={['20px','40px','60px','90px']} color="whiteColor">Projects <sub>03.</sub></Text>
                </Flex>

                <Flex direction={['column','column','row','row']} ml='5.73%' h='54.34%' mb='5.73'>
                    <Flex w='400px' h='600' ml='5.73%'>
                        <PFCard

                            img= "https://s3-alpha-sig.figma.com/img/72e8/06d5/f2f83356a84d8c6504138fd80086491d?Expires=1657497600&Signature=OXwxsmwhIuAOPsLlGbxbpJCm0BQWYGOIKWgDfsIoA0PRluvbGzLedfIa7embFJZEKhJQRoaQH1JuWIOxkZ~fvIFiilL1kcHXU9W-bqlBqfLM~uCup1mSIhr00s7Hh9Ttj2VbRHJtPt3Vg59sk1beItG2NZaoq7826GLQVCmJBe6dymBKdBo0NvIkIy7Y5azsqv7jWeBKGzcQ9mOqQOI7FcNvygZCFvWUG5bvgFSXtH2p2BbwPSEgEKSpKQN1j86A4Rqu44qeBVrjNNZkuu1H0V70RK~hJvhS9g0GE9ii7W76INEWb2Vq2RuQ5bKqdg1DLgZqOzvfAd4QOYH0QFh1Jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            projectname= {'Project 1'}
                            paragraph = {'project Paragraph'}

                        />  
                    </Flex>

                    <Flex  ml='5px' w='400px' h='600'>
                        <PFCard

                            img= "https://s3-alpha-sig.figma.com/img/72e8/06d5/f2f83356a84d8c6504138fd80086491d?Expires=1657497600&Signature=OXwxsmwhIuAOPsLlGbxbpJCm0BQWYGOIKWgDfsIoA0PRluvbGzLedfIa7embFJZEKhJQRoaQH1JuWIOxkZ~fvIFiilL1kcHXU9W-bqlBqfLM~uCup1mSIhr00s7Hh9Ttj2VbRHJtPt3Vg59sk1beItG2NZaoq7826GLQVCmJBe6dymBKdBo0NvIkIy7Y5azsqv7jWeBKGzcQ9mOqQOI7FcNvygZCFvWUG5bvgFSXtH2p2BbwPSEgEKSpKQN1j86A4Rqu44qeBVrjNNZkuu1H0V70RK~hJvhS9g0GE9ii7W76INEWb2Vq2RuQ5bKqdg1DLgZqOzvfAd4QOYH0QFh1Jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            projectname= {'Project 2'}
                            paragraph = {'project Paragraph'}

                        />
                    </Flex> 

                    <Flex ml='5px' w='400px' h='600'>
                        <PFCard

                            img= "https://s3-alpha-sig.figma.com/img/72e8/06d5/f2f83356a84d8c6504138fd80086491d?Expires=1657497600&Signature=OXwxsmwhIuAOPsLlGbxbpJCm0BQWYGOIKWgDfsIoA0PRluvbGzLedfIa7embFJZEKhJQRoaQH1JuWIOxkZ~fvIFiilL1kcHXU9W-bqlBqfLM~uCup1mSIhr00s7Hh9Ttj2VbRHJtPt3Vg59sk1beItG2NZaoq7826GLQVCmJBe6dymBKdBo0NvIkIy7Y5azsqv7jWeBKGzcQ9mOqQOI7FcNvygZCFvWUG5bvgFSXtH2p2BbwPSEgEKSpKQN1j86A4Rqu44qeBVrjNNZkuu1H0V70RK~hJvhS9g0GE9ii7W76INEWb2Vq2RuQ5bKqdg1DLgZqOzvfAd4QOYH0QFh1Jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            projectname= {'Project 3'}
                            paragraph = {'project Paragraph'}

                        />  
                    </Flex>  

                </Flex>
                </Flex>
                </Flex>

  
  )
}

