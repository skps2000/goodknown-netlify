// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { BulletinBoard, CardMultiple, Cash100, Gamepad, Logout, Store } from 'mdi-material-ui'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      sectionTitle: 'Apps'
    },
    {
      title: '대시보드',

      // title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'NEWS 알림',
      icon: Store,
      path: '/cardsns'
    },
    {
      title: '핫딜 알림',
      icon: Store,
      path: '/cardshd'
    },
    {
      title: 'LOL 알림',
      icon: Gamepad,
      path: '/cardslol'
    },
    {
      title: '로또 알림',
      icon: Cash100,
      path: '/cardsltt'
    },
    {
      sectionTitle: 'subscription'
    },
    {
      title: '내 구독',
      icon: CardMultiple,
      path: '/cards/sb'
    },
    {
      sectionTitle: 'BBS'
    },
    {
      title: '자유게시판',
      icon: BulletinBoard,
      path: '/tables/free'
    },
    {
      title: '국내핫딜',
      icon: BulletinBoard,
      path: '/tables/domestic'
    },
    {
      title: '해외핫딜',
      icon: BulletinBoard,
      path: '/tables/inter'
    },
    {
      sectionTitle: 'Account'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      // openInNewTab: true
    },
    {
      title: 'Logout',
      icon: Logout,
      path: '/pages/login',
      // openInNewTab: true
    },
    {
      title: 'Account',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      // openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      // openInNewTab: true
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
