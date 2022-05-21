import Sound from 'react-native-sound'

export const categoryData = [
  {
    name: 'Эрхтэн',
    key: 'erhten',
    target: 4,
  },
  {
    name: 'Эзэн бие',
    key: 'ezen-bie',
    target: 1,
  },
  {
    name: 'Гэр',
    key: 'ger',
    target: 4,
  },
  {
    name: 'Тоо',
    key: 'too',
    target: 2,
  },
  {
    name: 'Хэмжээ',
    key: 'hemjee',
    target: 3,
  },
  {
    name: 'Хэрэгсэл',
    key: 'heregsel',
    target: 4,
  },
  {
    name: 'Хүнс',
    key: 'huns',
    target: 4,
  },
  {
    name: 'Хүсэл',
    key: 'husel',
    target: 5,
  },
  {
    name: 'Хувцас',
    key: 'huwtsas',
    target: 4,
  },
  {
    name: 'Мэндчилгээ',
    key: 'mendchilgee',
    target: 5,
  },
  {
    name: 'Сэтгэл',
    key: 'setgel',
    target: 5,
  },
  {
    name: 'Тээвэр',
    key: 'teewer',
    target: 4,
  },
  {
    name: 'Цаг',
    key: 'tsag',
    target: 3,
  },
  {
    name: 'Үйл',
    key: 'uil',
    target: 5,
  },
]

export const cardData = [
  {
    name: 'suuh',
    category: 'uil',
    image: require('@/Assets/image/uil/suuh.png'),
    sound: new Sound(
      require('@/Assets/voice/suuh.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'hewteh',
    category: 'uil',
    image: require('@/Assets/image/uil/hewteh.png'),
    sound: new Sound(
      require('@/Assets/voice/hewteh.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'guih',
    category: 'uil',
    image: require('@/Assets/image/uil/guih.png'),
    sound: new Sound(
      require('@/Assets/voice/guih.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'bosoh',
    category: 'uil',
    image: require('@/Assets/image/uil/bosoh.png'),
    sound: new Sound(
      require('@/Assets/voice/bosoh.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'alhah',
    category: 'uil',
    image: require('@/Assets/image/uil/alhah.png'),
    sound: new Sound(
      require('@/Assets/voice/alhah.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'oroi',
    category: 'tsag',
    image: require('@/Assets/image/tsag/oroi.png'),
    sound: new Sound(
      require('@/Assets/voice/oroi.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'ugluu',
    category: 'tsag',
    image: require('@/Assets/image/tsag/ogloo.png'),
    sound: new Sound(
      require('@/Assets/voice/ugluu.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'udur',
    category: 'tsag',
    image: require('@/Assets/image/tsag/odor.png'),
    sound: new Sound(
      require('@/Assets/voice/udur.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'odoo',
    category: 'tsag',
    image: require('@/Assets/image/tsag/odoo.png'),
    sound: new Sound(
      require('@/Assets/voice/odoo.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'daraa',
    category: 'tsag',
    image: require('@/Assets/image/tsag/daraa.png'),
    sound: new Sound(
      require('@/Assets/voice/daraa.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: '103',
    category: 'teewer',
    image: require('@/Assets/image/teewer/103.png'),
    sound: new Sound(
      require('@/Assets/voice/103.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'tsagdaa',
    category: 'teewer',
    image: require('@/Assets/image/teewer/tsagdaa.png'),
    sound: new Sound(
      require('@/Assets/voice/tsagdaa.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'mashin',
    category: 'teewer',
    image: require('@/Assets/image/teewer/mashin.png'),
    sound: new Sound(
      require('@/Assets/voice/mashin.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'gal-komand',
    category: 'teewer',
    image: require('@/Assets/image/teewer/gal-komand.png'),
    sound: new Sound(
      require('@/Assets/voice/gal-komand.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'awtobus',
    category: 'teewer',
    image: require('@/Assets/image/teewer/awtobus.png'),
    sound: new Sound(
      require('@/Assets/voice/awtobus.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: '103',
    category: 'teewer',
    image: require('@/Assets/image/teewer/103.png'),
    sound: new Sound(
      require('@/Assets/voice/103.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'uurtai',
    category: 'setgel',
    image: require('@/Assets/image/setgel/uurtai.png'),
    sound: new Sound(
      require('@/Assets/voice/uurtai.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'ugui',
    category: 'setgel',
    image: require('@/Assets/image/setgel/ugui.png'),
    sound: new Sound(
      require('@/Assets/voice/ugui.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'tiim',
    category: 'setgel',
    image: require('@/Assets/image/setgel/tiim.png'),
    sound: new Sound(
      require('@/Assets/voice/tiim.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'uwdsun',
    category: 'setgel',
    image: require('@/Assets/image/setgel/uwdsun.png'),
    sound: new Sound(
      require('@/Assets/voice/uwdsun.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'medehgui',
    category: 'setgel',
    image: require('@/Assets/image/setgel/medehgui.png'),
    sound: new Sound(
      require('@/Assets/voice/medehgui.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'hetsuu',
    category: 'setgel',
    image: require('@/Assets/image/setgel/hetsuu.png'),
    sound: new Sound(
      require('@/Assets/voice/hetsuu.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'gunigtai',
    category: 'setgel',
    image: require('@/Assets/image/setgel/gunigtai.png'),
    sound: new Sound(
      require('@/Assets/voice/gunigtai.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'durtai',
    category: 'setgel',
    image: require('@/Assets/image/setgel/durtai.png'),
    sound: new Sound(
      require('@/Assets/voice/durtai.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'durgui',
    category: 'setgel',
    image: require('@/Assets/image/setgel/durgui.png'),
    sound: new Sound(
      require('@/Assets/voice/durgui.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'bayar-huurtei',
    category: 'setgel',
    image: require('@/Assets/image/setgel/bayar-huurtei.png'),
    sound: new Sound(
      require('@/Assets/voice/bayar-huurtei.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'uuchlaarai',
    category: 'mendchilgee',
    image: require('@/Assets/image/mendchilgee/uuchlaarai.png'),
    sound: new Sound(
      require('@/Assets/voice/uuchlaarai.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'sain-baina-uu',
    category: 'mendchilgee',
    image: require('@/Assets/image/mendchilgee/sain-baina-uu.png'),
    sound: new Sound(
      require('@/Assets/voice/sain-baina-uu.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'bayrtai',
    category: 'mendchilgee',
    image: require('@/Assets/image/mendchilgee/bayrtai.png'),
    sound: new Sound(
      require('@/Assets/voice/bayrtai.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'bayrlalaa',
    category: 'mendchilgee',
    image: require('@/Assets/image/mendchilgee/bayrlalaa.png'),
    sound: new Sound(
      require('@/Assets/voice/bayrlalaa.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'tsamts',
    category: 'huwtsas',
    image: require('@/Assets/image/huwtsas/tsamts.png'),
    sound: new Sound(
      require('@/Assets/voice/tsamts.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'omd',
    category: 'huwtsas',
    image: require('@/Assets/image/huwtsas/omd.png'),
    sound: new Sound(
      require('@/Assets/voice/umd.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'oims',
    category: 'huwtsas',
    image: require('@/Assets/image/huwtsas/oims.png'),
    sound: new Sound(
      require('@/Assets/voice/oims.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'malgai',
    category: 'huwtsas',
    image: require('@/Assets/image/huwtsas/malgai.png'),
    sound: new Sound(
      require('@/Assets/voice/malgai.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'hurem',
    category: 'huwtsas',
    image: require('@/Assets/image/huwtsas/hurem.png'),
    sound: new Sound(
      require('@/Assets/voice/hurem.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'gutal',
    category: 'huwtsas',
    image: require('@/Assets/image/huwtsas/gutal.png'),
    sound: new Sound(
      require('@/Assets/voice/gutal.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'ywmaar-baina',
    category: 'husel',
    image: require('@/Assets/image/husel/ywmaar-baina.png'),
    sound: new Sound(
      require('@/Assets/voice/ywmaar-baina.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'uzeerei',
    category: 'husel',
    image: require('@/Assets/image/husel/uzeerei.png'),
    sound: new Sound(
      require('@/Assets/voice/uzeerei.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'uumaar-baina',
    category: 'husel',
    image: require('@/Assets/image/husel/uumaar-baina.png'),
    sound: new Sound(
      require('@/Assets/voice/uumaar-baina.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'untmaar-baina',
    category: 'husel',
    image: require('@/Assets/image/husel/untmaar-baina.png'),
    sound: new Sound(
      require('@/Assets/voice/untmaar-baina.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'tuslaarai',
    category: 'husel',
    image: require('@/Assets/image/husel/tuslaarai.png'),
    sound: new Sound(
      require('@/Assets/voice/tuslaarai.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'sonsooroi',
    category: 'husel',
    image: require('@/Assets/image/husel/sonsooroi.png'),
    sound: new Sound(
      require('@/Assets/voice/sonsooroi.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'ireerei',
    category: 'husel',
    image: require('@/Assets/image/husel/ireerei.png'),
    sound: new Sound(
      require('@/Assets/voice/ireerei.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'ideerei',
    category: 'husel',
    image: require('@/Assets/image/husel/ideerei.png'),
    sound: new Sound(
      // change
      require('@/Assets/voice/ireerei.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'huleegeeree',
    category: 'husel',
    image: require('@/Assets/image/husel/huleegeeree.png'),
    sound: new Sound(
      require('@/Assets/voice/huleegeerei.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'bolioroi',
    category: 'husel',
    image: require('@/Assets/image/husel/bolioroi.png'),
    sound: new Sound(
      require('@/Assets/voice/bolioroi.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'us',
    category: 'huns',
    image: require('@/Assets/image/huns/us.png'),
    sound: new Sound(
      require('@/Assets/voice/us.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'tsai',
    category: 'huns',
    image: require('@/Assets/image/huns/tsai.png'),
    sound: new Sound(
      require('@/Assets/voice/tsai.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'toms',
    category: 'huns',
    image: require('@/Assets/image/huns/toms.png'),
    sound: new Sound(
      require('@/Assets/voice/tums.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'talh',
    category: 'huns',
    image: require('@/Assets/image/huns/talh.png'),
    sound: new Sound(
      require('@/Assets/voice/talh.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'songino',
    category: 'huns',
    image: require('@/Assets/image/huns/songino.png'),
    sound: new Sound(
      require('@/Assets/voice/songino.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'mah',
    category: 'huns',
    image: require('@/Assets/image/huns/mah.png'),
    sound: new Sound(
      require('@/Assets/voice/mah.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'luuwan',
    category: 'huns',
    image: require('@/Assets/image/huns/luuwan.png'),
    sound: new Sound(
      require('@/Assets/voice/luuwan.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'goimon',
    category: 'huns',
    image: require('@/Assets/image/huns/goimon.png'),
    sound: new Sound(
      require('@/Assets/voice/goimon.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'budaa',
    category: 'huns',
    image: require('@/Assets/image/huns/budaa.png'),
    sound: new Sound(
      require('@/Assets/voice/budaa.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'baitsaa',
    category: 'huns',
    image: require('@/Assets/image/huns/baitsaa.png'),
    sound: new Sound(
      require('@/Assets/voice/baitsai.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'tsetserleg',
    category: 'heregsel',
    image: require('@/Assets/image/heregsel/tsetserleg.png'),
    sound: new Sound(
      require('@/Assets/voice/tsetserleg.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'surguuli',
    category: 'heregsel',
    image: require('@/Assets/image/heregsel/surguuli.png'),
    sound: new Sound(
      require('@/Assets/voice/surguuli.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'shiree',
    category: 'heregsel',
    image: require('@/Assets/image/heregsel/shiree.png'),
    sound: new Sound(
      require('@/Assets/voice/shiree.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'sandal',
    category: 'heregsel',
    image: require('@/Assets/image/heregsel/sandal.png'),
    sound: new Sound(
      require('@/Assets/voice/sandal.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'or',
    category: 'heregsel',
    image: require('@/Assets/image/heregsel/or.png'),
    sound: new Sound(
      require('@/Assets/voice/or.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'harandaa',
    category: 'heregsel',
    image: require('@/Assets/image/heregsel/harandaa.png'),
    sound: new Sound(
      require('@/Assets/voice/harandaa.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'ger',
    category: 'heregsel',
    image: require('@/Assets/image/heregsel/ger.png'),
    sound: new Sound(
      require('@/Assets/voice/ger.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'dewter',
    category: 'heregsel',
    image: require('@/Assets/image/heregsel/dewter.png'),
    sound: new Sound(
      require('@/Assets/voice/dewter.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'bal',
    category: 'heregsel',
    image: require('@/Assets/image/heregsel/bal.png'),
    sound: new Sound(
      require('@/Assets/voice/bal.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'urt',
    category: 'hemjee',
    image: require('@/Assets/image/hemjee/urt.png'),
    sound: new Sound(
      require('@/Assets/voice/urt.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'tom',
    category: 'hemjee',
    image: require('@/Assets/image/hemjee/tom.png'),
    sound: new Sound(
      require('@/Assets/voice/tom.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'jijeg',
    category: 'hemjee',
    image: require('@/Assets/image/hemjee/jijeg.png'),
    sound: new Sound(
      require('@/Assets/voice/jijig.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'ih',
    category: 'hemjee',
    image: require('@/Assets/image/hemjee/ih.png'),
    sound: new Sound(
      require('@/Assets/voice/ih.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'huiten',
    category: 'hemjee',
    image: require('@/Assets/image/hemjee/huiten.png'),
    sound: new Sound(
      require('@/Assets/voice/huiten.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'haluun',
    category: 'hemjee',
    image: require('@/Assets/image/hemjee/haluun.png'),
    sound: new Sound(
      require('@/Assets/voice/haluun.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'bogino',
    category: 'hemjee',
    image: require('@/Assets/image/hemjee/bogino.png'),
    sound: new Sound(
      require('@/Assets/voice/bogino.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'baga',
    category: 'hemjee',
    image: require('@/Assets/image/hemjee/baga.png'),
    sound: new Sound(
      require('@/Assets/voice/baga.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: '100',
    category: 'too',
    image: require('@/Assets/image/hemjee/100.png'),
    sound: new Sound(
      require('@/Assets/voice/100.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: '10',
    category: 'too',
    image: require('@/Assets/image/hemjee/10.png'),
    sound: new Sound(
      require('@/Assets/voice/10.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: '9',
    category: 'too',
    image: require('@/Assets/image/hemjee/9.png'),
    sound: new Sound(
      require('@/Assets/voice/9.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: '8',
    category: 'too',
    image: require('@/Assets/image/hemjee/8.png'),
    sound: new Sound(
      require('@/Assets/voice/8.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: '7',
    category: 'too',
    image: require('@/Assets/image/hemjee/7.png'),
    sound: new Sound(
      require('@/Assets/voice/7.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: '6',
    category: 'too',
    image: require('@/Assets/image/hemjee/6.png'),
    sound: new Sound(
      require('@/Assets/voice/6.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: '5',
    category: 'too',
    image: require('@/Assets/image/hemjee/5.png'),
    sound: new Sound(
      require('@/Assets/voice/5.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: '4',
    category: 'too',
    image: require('@/Assets/image/hemjee/4.png'),
    sound: new Sound(
      require('@/Assets/voice/4.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: '3',
    category: 'too',
    image: require('@/Assets/image/hemjee/3.png'),
    sound: new Sound(
      require('@/Assets/voice/3.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: '2',
    category: 'too',
    image: require('@/Assets/image/hemjee/2.png'),
    sound: new Sound(
      require('@/Assets/voice/2.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: '1',
    category: 'too',
    image: require('@/Assets/image/hemjee/1.png'),
    sound: new Sound(
      require('@/Assets/voice/1.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'untlagiin-oroo',
    category: 'ger',
    image: require('@/Assets/image/ger/untlagiin-oroo.png'),
    sound: new Sound(
      require('@/Assets/voice/untlagiin-uruu.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'ugaalgiin-oroo',
    category: 'ger',
    image: require('@/Assets/image/ger/ugaalgin-oroo.png'),
    sound: new Sound(
      require('@/Assets/voice/ugaalgiin-uruu.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'togloomiin-oroo',
    category: 'ger',
    image: require('@/Assets/image/ger/togloomiin-oroo.png'),
    sound: new Sound(
      require('@/Assets/voice/togloomiin-uruu.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'jorlon',
    category: 'ger',
    image: require('@/Assets/image/ger/jorlon.png'),
    sound: new Sound(
      require('@/Assets/voice/jorlon.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'gal-togoo',
    category: 'ger',
    image: require('@/Assets/image/ger/gal-togoo.png'),
    sound: new Sound(
      require('@/Assets/voice/gal-togoo.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'gal-togoo',
    category: 'ger',
    image: require('@/Assets/image/ger/bann.png'),
    sound: new Sound(
      // need to change
      require('@/Assets/voice/aaw.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'ta',
    category: 'ezen-bie',
    image: require('@/Assets/image/ezen-bie/ta.png'),
    sound: new Sound(
      require('@/Assets/voice/ta.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'owoo',
    category: 'ezen-bie',
    image: require('@/Assets/image/ezen-bie/owoo.png'),
    sound: new Sound(
      require('@/Assets/voice/uwuu.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'emee',
    category: 'ezen-bie',
    image: require('@/Assets/image/ezen-bie/emee.png'),
    sound: new Sound(
      require('@/Assets/voice/emee.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'egch',
    category: 'ezen-bie',
    image: require('@/Assets/image/ezen-bie/egch.png'),
    sound: new Sound(
      require('@/Assets/voice/egch.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'eej',
    category: 'ezen-bie',
    image: require('@/Assets/image/ezen-bie/eej.png'),
    sound: new Sound(
      require('@/Assets/voice/eej.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'duu',
    category: 'ezen-bie',
    image: require('@/Assets/image/ezen-bie/duu.png'),
    sound: new Sound(
      require('@/Assets/voice/duu.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'bi',
    category: 'ezen-bie',
    image: require('@/Assets/image/ezen-bie/bi.png'),
    sound: new Sound(
      require('@/Assets/voice/bi.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'bagsh',
    category: 'ezen-bie',
    image: require('@/Assets/image/ezen-bie/bagsh.png'),
    sound: new Sound(
      require('@/Assets/voice/bagsh.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'ah',
    category: 'ezen-bie',
    image: require('@/Assets/image/ezen-bie/ah.png'),
    sound: new Sound(
      require('@/Assets/voice/ah.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'aaw',
    category: 'ezen-bie',
    image: require('@/Assets/image/ezen-bie/aaw.png'),
    sound: new Sound(
      require('@/Assets/voice/aaw.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'Gar',
    category: 'erhten',
    image: require('@/Assets/image/erhten/gar.png'),
    sound: new Sound(
      require('@/Assets/voice/gar.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'Gedes',
    category: 'erhten',
    image: require('@/Assets/image/erhten/gedes.png'),
    sound: new Sound(
      require('@/Assets/voice/gedes.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'hol',
    category: 'erhten',
    image: require('@/Assets/image/erhten/hol.png'),
    sound: new Sound(
      require('@/Assets/voice/hul.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'shud',
    category: 'erhten',
    image: require('@/Assets/image/erhten/shud.png'),
    sound: new Sound(
      require('@/Assets/voice/shud.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
  {
    name: 'tolgoi',
    category: 'erhten',
    image: require('@/Assets/image/erhten/tolgoi.png'),
    sound: new Sound(
      require('@/Assets/voice/tolgoi.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('error', error)
          return
        }
      },
    ),
  },
]
