import { ScreenNames } from ".";
import { GlobalImage } from "./staticImage";

export const STATIC_DATA = {
    sliderData: [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },],
    topTabData: [
        {
            headerName: 'sadsad',
            routeToNavigate: ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN
        },
        {
            headerName: 'sadsad',
            routeToNavigate: ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN
        },
        {
            headerName: 'sadsad',
            routeToNavigate: ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN
        },
        {
            headerName: 'sadsad',
            routeToNavigate: ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN
        }
    ],
    createAccountData:[
        'Business','Retailer'
    ]
     ,
     exploreItemData: [
        {
          key: '1',
          image: GlobalImage.coffieImage,
          name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
          price: '18.44',
          discountPrice: '18.44',
          percent: '20',
        },
        {
          key: '2',
          image:GlobalImage.detolImage ,
          name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
          price: '18.44',
          discountPrice: '18.44',
          percent: '20',
        },
        {
          key: '3',
          image: GlobalImage.coffieImage,
          name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
          price: '18.44',
          discountPrice: '18.44',
          percent: '20',
        },
        {
          key: '4',
          image:GlobalImage.detolImage,
          name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
          price: '18.44',
          discountPrice: '18.44',
          percent: '20',
        },
      ],
      topDetailData: [
        {
          key: '1',
          image: GlobalImage.coffieImage,
          name: 'Coffee & Tea',
          category: 'Beverages',
        },
        {
          key: '2',
          image: GlobalImage.coffieImage,
          name: 'Coffee & Tea',
          category: 'Beverages',
        },
        {
          key: '3',
          image: GlobalImage.coffieImage,
          name: 'Coffee & Tea',
          category: 'Beverages',
        },
       
      ],
      offerTopData:[
        {
          name:'10% Off'
        },
        {
          name:'15% Off'
        },
        {
          name:'20% Off'
        },
        {
          name:'25% Off'
        },
      ],
      offerBannerData:[
        {
          bannerImage: GlobalImage.bannerOfferImage,
          bannerName:'Shop Baby Care'
        },
        {
          bannerImage: GlobalImage.bannerOfferImage2,
          bannerName:'Shop Diet &  Nutrition'
        },
        {
          bannerImage: GlobalImage.bannerOfferImage,
          bannerName:'Shop Health Care'
        },

      ]
}