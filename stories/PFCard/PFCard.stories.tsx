import React from 'react';

import PFCard from '../../foundation/PFCard/PFCard'; 


import {HeadingProject1, HeadingProject2, HeadingProject3} from  '../../stories/PFHeading/PFHeading.stories';           
import {ParagraphProject1, ParagraphProject2, ParagraphProject3} from '../../stories/PFParagraph/PFParagraph.stories'; 


export default {
    title: "Foundation/PFCard",
    component: PFCard,
  };


export const PFCardProject1: React.FC = () => {
    return <PFCard

            img= "https://s3-alpha-sig.figma.com/img/72e8/06d5/f2f83356a84d8c6504138fd80086491d?Expires=1657497600&Signature=OXwxsmwhIuAOPsLlGbxbpJCm0BQWYGOIKWgDfsIoA0PRluvbGzLedfIa7embFJZEKhJQRoaQH1JuWIOxkZ~fvIFiilL1kcHXU9W-bqlBqfLM~uCup1mSIhr00s7Hh9Ttj2VbRHJtPt3Vg59sk1beItG2NZaoq7826GLQVCmJBe6dymBKdBo0NvIkIy7Y5azsqv7jWeBKGzcQ9mOqQOI7FcNvygZCFvWUG5bvgFSXtH2p2BbwPSEgEKSpKQN1j86A4Rqu44qeBVrjNNZkuu1H0V70RK~hJvhS9g0GE9ii7W76INEWb2Vq2RuQ5bKqdg1DLgZqOzvfAd4QOYH0QFh1Jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            projectname= {<HeadingProject1/>}
            paragraph = {<ParagraphProject1/>}
           
            
        />
}

export const PFCardProject2: React.FC = () => {
    return <PFCard

            img= "https://s3-alpha-sig.figma.com/img/72e8/06d5/f2f83356a84d8c6504138fd80086491d?Expires=1657497600&Signature=OXwxsmwhIuAOPsLlGbxbpJCm0BQWYGOIKWgDfsIoA0PRluvbGzLedfIa7embFJZEKhJQRoaQH1JuWIOxkZ~fvIFiilL1kcHXU9W-bqlBqfLM~uCup1mSIhr00s7Hh9Ttj2VbRHJtPt3Vg59sk1beItG2NZaoq7826GLQVCmJBe6dymBKdBo0NvIkIy7Y5azsqv7jWeBKGzcQ9mOqQOI7FcNvygZCFvWUG5bvgFSXtH2p2BbwPSEgEKSpKQN1j86A4Rqu44qeBVrjNNZkuu1H0V70RK~hJvhS9g0GE9ii7W76INEWb2Vq2RuQ5bKqdg1DLgZqOzvfAd4QOYH0QFh1Jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            projectname= {<HeadingProject2/>}
            paragraph = {<ParagraphProject2/>}
              
        />
}


export const PFCardProject3: React.FC = () => {
    return <PFCard

            img= "https://s3-alpha-sig.figma.com/img/72e8/06d5/f2f83356a84d8c6504138fd80086491d?Expires=1657497600&Signature=OXwxsmwhIuAOPsLlGbxbpJCm0BQWYGOIKWgDfsIoA0PRluvbGzLedfIa7embFJZEKhJQRoaQH1JuWIOxkZ~fvIFiilL1kcHXU9W-bqlBqfLM~uCup1mSIhr00s7Hh9Ttj2VbRHJtPt3Vg59sk1beItG2NZaoq7826GLQVCmJBe6dymBKdBo0NvIkIy7Y5azsqv7jWeBKGzcQ9mOqQOI7FcNvygZCFvWUG5bvgFSXtH2p2BbwPSEgEKSpKQN1j86A4Rqu44qeBVrjNNZkuu1H0V70RK~hJvhS9g0GE9ii7W76INEWb2Vq2RuQ5bKqdg1DLgZqOzvfAd4QOYH0QFh1Jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            projectname= {<HeadingProject3/>}
            paragraph = {<ParagraphProject3/>}
           
            
        />
}
