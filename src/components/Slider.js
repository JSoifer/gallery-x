import React, { Component } from 'react';
import './Slider.scss';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';




export default class Slider extends Component  {
  constructor(props) {
    super(props);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.state = {
      images: [
        "https://previews.dropbox.com/p/thumb/AAS5LyiA3I9KOIFWGNTHzxN6RInVsP464vdWMFegFhqNeDmRd88KyaI2m8vbQqDNQJzskdRGoA4WzB5k2W2JOJ7IbVkomIv4969solmk9mAeIRRMNAOF8Amlbn2-zaAhvINBnTYd5GOtuqkcrW_Q9ZVG2wLILBjjtaAhNS7L9bRZgrwJtgvY3yKMqUI5zfaqg1yDUNwO_spbnwt5wM7OuBeBLxNcFjqzyXTo7v0QEswttg/p.jpeg?size=1600x1200&size_mode=3",
        "https://previews.dropbox.com/p/thumb/AAT_3rk1mJkordDIv6shrWOCBvvwG25vJQ_ykAAOqMgGNOmqOY4oB4d9-5o-DKVe1nQo6C7h-Nbk4EZE7W9PStB4Xg0QsTGPpztwBEU7Xieilp3VLETf6mQP_EGmBLrVQZMqKpIsVfVmmMjWLCnnvA0uiGjjQRhFHrebC9YSeg8B7b-2zBYYzjKDUkQVLutOy0eFiagFesh52OHScZk_LYM3FPUuLA0957talqETKt27GA/p.jpeg?size=1600x1200&size_mode=3",
        "https://previews.dropbox.com/p/thumb/AASlgcM-lR-ha2oyVZieCEZTcp-yUnz7aDjdYBg8vXunnF_sAxANiPxlqCAHIyEB9QqUgz-qo39s9O-AnBk06myxB8H_O3ssJX5uRos2-Kmg8JO9TtKl83ce6q0-j8WwR-gmW-t3A1g2npG5tBF0I3IcUqCC9Ph0zyimqvl__kUFK46YvRWnfgMk4lXmL8kURu_gHOB4q7GhnBUI16NY6NZPn3Fl7Ce8mS4uy634p9bX-A/p.jpeg?size=1600x1200&size_mode=3",
        "https://previews.dropbox.com/p/thumb/AAT4DTTzUbtyGfdl-YWtemcdwc0YUGtSkwGWcI38VVeD0VxHmTQHYezgTldwAeB9_SfyUKxK7-UjKBIxWjwLisd1CqUxhNSOWjhXDtKI2nJnNpxkphgPqnWczEYk3uYV8ztMGA2t2s0T_HZWLfHVA7fUTdX9sZRdzbvt7WrTfn22bRLW07BpfdQy5hR6LcNcKcmPC7doIpXWtnCxQX-i9EtpHD89RPfftTptG71d1JAIbw/p.jpeg?size=1600x1200&size_mode=3",
        "https://previews.dropbox.com/p/thumb/AASutr8-j7idbuFyn1kUMi2D_Plm9CkS17oNPmoYKKjRro3IEtywrQOrnNuEQraoPBhc3LqUKIjaBqibrCTbVa2OVSZHogWIcNXlexZfODJuLVDaOCV3tKUxOZdZLbIZojNIUoFiMBqj_jz1pI772FlK2tmYjR7KWRi7DBqtEVK8RCUvFWl91Lwt3wtqW9LGKIWd_SkQpyi-2bwQN38cT-MugXNHnkHM2CfEQQ2Uzm3qHg/p.jpeg?size=1600x1200&size_mode=3",
        "https://previews.dropbox.com/p/thumb/AASQowiMgtcBZ7kfiDzeAtmPoNXnimEiTKd6Bxgo-J3H-tuMh0FnUQLqDn7iYwk11DN_ZzXDoez6Y6xE3-6uL4iWCh-SVVyIc2a23ueZvsDheMnS3HG6bTNXwJzs1ckPgsUPUCYr3BEifKiLafLuSMIpk9wDnToooSMq6dHtAB-ufIN1MHTTWh1lCuQYQX1oYlvPhsPR5LLHah4gyxllUxv5m-TxoRZd9egAtNQl1h8Jvw/p.jpeg?size=1600x1200&size_mode=3",
        "https://previews.dropbox.com/p/thumb/AAQhdBAlIRdNPkAQUhVGBmLwtZ7tKB18aodKBd-gB5ro6v3kYIUwD7x-29EQ3qYO-8L6fJ0N_DJKufs_K2EaN5Jc1bW5ihnzGD9ncHYtwn9MZD8o5GYxmKcrzvW-g-nImJx69klHiBWRIeE0tlQpAh2aMMigCAeyKoMnvtG3GSfpG36k61P8YxfhLdo2GgJXVLvNZWCkBYLL4MjxBqBdixgfblGL9YcbspVFnqsIxmJgpw/p.jpeg?size=1600x1200&size_mode=3",
        "https://previews.dropbox.com/p/thumb/AATiQjsn2GWFjwYfOtr3UkZIc2bk5JL0JDPgSBxWP7_TBBFW6HDoduEPerEnikA8B5R8SvEotHMCLLLAFHFpkuGDw5W6m7i_Ly-zgfvr3KDB52V0xlzgysq7RoiP7s2vOqgryI0DHB8EObCWGoOApr6duXXypFakg96yI2vySmKfwK59rB8stCW2Q_p4qOL4TByp7nLBZI5sFeS5BCk85WihsBozL8a7Oyfj1hRb2AFADA/p.jpeg?size=1600x1200&size_mode=3"
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide() {
    const lastIndex = this.state.images.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentIndex - 1;

    this.setState({
      currentIndex: index
    });
  }

  goToNextSlide = () => {
    const lastIndex = this.state.images.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentIndex + 1;

    this.setState({
      currentIndex: index
    });
  }


  render() {
    
    return(
      <div className='slider' >
        <LeftArrow
          goToPrevSlide={this.goToPrevSlide}/>


              <Slide image={this.state.images[this.state.currentIndex]} />



        <RightArrow
          goToNextSlide={this.goToNextSlide}/>
      </div>

    );

  }
}
