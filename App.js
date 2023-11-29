import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
 - Logo
 - NavItems
Body
 - Serch
 - RestaurentContainer
  - RestaurentCard
   - Img
   - Restaurent name, cuisine, star rating, deliver time
Footer
 - Copyright
 - Links
 - Address
 -Contact
*/

const resList = [
  {
    info: {
      id: "182275",
      name: "Domino's Pizza",
      cloudinaryImageId: "treaw0wsdk9x9g8a8f3z",
      locality: "Anand Prime",
      areaName: "Pratap Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "182275",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "2456",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-28 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-anand-prime-pratap-nagar-jaipur-182275",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "220706",
      name: "Burger Farm",
      cloudinaryImageId: "i82uuw2dkib0gcaaonwh",
      locality: "Pratap Nagar",
      areaName: "Pratap Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "American",
        "Barbecue",
        "Italian-American",
        "Snacks",
        "Combo",
        "Grill",
        "Beverages",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "220706",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "4660",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-28 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-farm-pratap-nagar-jaipur-220706",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "46458",
      name: "Sethi Tikka Kabab Curry",
      cloudinaryImageId: "mhqnaprkuupnsujegcc4",
      locality: "Malviya Nagar",
      areaName: "Malviya Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "Kebabs",
        "Punjabi",
        "Biryani",
        "Lucknowi",
        "Mughlai",
        "Indian",
        "Afghani",
        "Tandoor",
        "Snacks",
        "Hyderabadi",
        "Grill",
        "Beverages",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "46458",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7000,
      },
      parentId: "13804",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sethi-tikka-kabab-curry-malviya-nagar-jaipur-46458",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "45980",
      name: "So Hi Kebabs and Curries Company",
      cloudinaryImageId: "ewnqz3gczvcplufbzcst",
      locality: "Tonk Road",
      areaName: "Tonk Road",
      costForTwo: "₹750 for two",
      cuisines: [
        "North Indian",
        "Thalis",
        "Chinese",
        "Mughlai",
        "Chaat",
        "Punjabi",
        "Desserts",
        "Snacks",
        "Rajasthani",
        "Tandoor",
        "Sweets",
        "Indian",
        "Beverages",
        "Ice Cream",
        "Italian",
        "Pastas",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "45980",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5400,
      },
      parentId: "190536",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-28 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/so-hi-kebabs-and-curries-company-tonk-road-jaipur-45980",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "347063",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Mahal road",
      areaName: "Jagatpura",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "347063",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 8000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 8000,
      },
      parentId: "5588",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-mahal-road-jagatpura-jaipur-347063",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "59274",
      name: "Rominus Pizza And Burger",
      cloudinaryImageId: "9ec9ffd900c24ef751e2f34ba3d2fd4b",
      locality: "Malviya Nagar",
      areaName: "Malviya Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Pizzas",
        "Italian-American",
        "American",
        "Barbecue",
        "Snacks",
        "Grill",
        "Italian",
        "Pastas",
        "Sweets",
        "Desserts",
        "Beverages",
      ],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "59274",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6300,
      },
      parentId: "8387",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "45 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/rominus-pizza-and-burger-malviya-nagar-jaipur-59274",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "183356",
      name: "Kebabs & Curries Company",
      cloudinaryImageId: "p7uoahdsi6kqgmipdkd2",
      locality: "Santosh Vihar",
      areaName: "Jagatpura",
      costForTwo: "₹750 for two",
      cuisines: ["Indian", "North Indian", "Mughlai"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "183356",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 8000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 8000,
      },
      parentId: "6302",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kebabs-and-curries-company-santosh-vihar-jagatpura-jaipur-183356",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "253717",
      name: "McDonald's",
      cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
      locality: "Gaurav Towers",
      areaName: "Malviya Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "253717",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 8300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 8300,
      },
      parentId: "630",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 7.8,
        serviceability: "SERVICEABLE",
        slaString: "46 mins",
        lastMileTravelString: "7.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 00:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-gaurav-towers-malviya-nagar-jaipur-253717",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "45175",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "GT Central",
      areaName: "Malviya Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "45175",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 8300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 8300,
      },
      parentId: "166",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "41 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-gt-central-malviya-nagar-jaipur-45175",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "307801",
      name: "Barbeque Nation",
      cloudinaryImageId: "opqfjc0gf57w9fjx9239",
      locality: "Mirza Ismail Road",
      areaName: "B2 bypass",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "307801",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7000,
      },
      parentId: "2438",
      avgRatingString: "3.7",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "37 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-28 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/barbeque-nation-mirza-ismail-road-b2-bypass-jaipur-307801",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "58387",
      name: "Harishankar Veg Restro",
      cloudinaryImageId: "jazhldkb8wdtgqiwzufp",
      locality: "Ambedkar Colony",
      areaName: "EP Chauraha, B2 Byepass",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Jain", "Tandoor", "Thalis", "Beverages"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "58387",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4700,
      },
      parentId: "4864",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-28 23:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/harishankar-veg-restro-ambedkar-colony-ep-chauraha-b2-byepass-jaipur-58387",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "402636",
      name: "Starbucks Coffee",
      cloudinaryImageId: "0c958153eeb436db6d515ca36e47e8a4",
      locality: "Sector 4",
      areaName: "Malviya Nagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "402636",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 8300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 8300,
      },
      parentId: "195515",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 7.8,
        serviceability: "SERVICEABLE",
        slaString: "46 mins",
        lastMileTravelString: "7.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-28 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/starbucks-coffee-sector-4-malviya-nagar-jaipur-402636",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "44601",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "846dab8cca3c56a482d7cbcda0dd0eb9",
      locality: "MZ Block",
      areaName: "Malviya Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "44601",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7300,
      },
      parentId: "2233",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 63,
        lastMileTravel: 6.9,
        serviceability: "SERVICEABLE",
        slaString: "63 mins",
        lastMileTravelString: "6.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-mz-block-malviya-nagar-jaipur-44601",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "567280",
      name: "EatFit - Desi Meals, Burgers & More",
      cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
      locality: "Sector 7",
      areaName: "Malviya Nagar",
      costForTwo: "₹270 for two",
      cuisines: [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani",
      ],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "567280",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7300,
      },
      parentId: "76139",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "40 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-28 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/eatfit-desi-meals-burgers-and-more-sector-7-malviya-nagar-jaipur-567280",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "77439",
      name: "Marky Momos",
      cloudinaryImageId: "xca12b6mhazhaj7xptpn",
      locality: "Jagatpura",
      areaName: "Jagatpura",
      costForTwo: "₹500 for two",
      cuisines: ["Chinese", "Continental", "Beverages"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "77439",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 8000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 8000,
      },
      parentId: "4659",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "41 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/marky-momos-jagatpura-jaipur-77439",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "195224",
      name: "Biryani Blues",
      cloudinaryImageId: "ist6yabmi7rvibipe6gz",
      locality: "Malviya Nagar",
      areaName: "Malviya Nagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "Lucknowi",
        "Kebabs",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "195224",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 8300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 8300,
      },
      parentId: "13813",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 52,
        lastMileTravel: 7.4,
        serviceability: "SERVICEABLE",
        slaString: "52 mins",
        lastMileTravelString: "7.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/biryani-blues-malviya-nagar-jaipur-195224",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "433350",
      name: "The Brooklyn Creamery - Healthy Ice Cream",
      cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
      locality: "Mahal road",
      areaName: "Jagatpura",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "433350",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7300,
      },
      parentId: "236673",
      avgRatingString: "4.3",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "38 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 03:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-mahal-road-jagatpura-jaipur-433350",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "89569",
      name: "UBQ by Barbeque Nation",
      cloudinaryImageId: "ehulrokouyhx9zbxfutg",
      locality: "Ashram Marg",
      areaName: "Tonk Road",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "89569",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7000,
      },
      parentId: "10804",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "42 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-28 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-ashram-marg-tonk-road-jaipur-89569",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "376656",
      name: "Molly Moo Ice Creams",
      cloudinaryImageId: "nqapg0vlpkpjxiexqce5",
      locality: "Lal Bahadur Nagar",
      areaName: "Malviya Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Bakery", "Beverages"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "376656",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7300,
      },
      parentId: "137995",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "38 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-28 23:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/molly-moo-ice-creams-lal-bahadur-nagar-malviya-nagar-jaipur-376656",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "228823",
      name: "Cake Corner",
      cloudinaryImageId: "xel0jn0ycpixfghd4t4g",
      locality: "Sector 6",
      areaName: "Malviya Nagar",
      costForTwo: "₹100 for two",
      cuisines: [
        "Desserts",
        "North Indian",
        "Chinese",
        "Bakery",
        "Italian",
        "Fast Food",
        "Indian",
        "Snacks",
      ],
      avgRating: 3.9,
      veg: true,
      feeDetails: {
        restaurantId: "228823",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7300,
      },
      parentId: "10062",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-29 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cake-corner-sector-6-malviya-nagar-jaipur-228823",
      type: "WEBLINK",
    },
  },
];

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://cdn.dribbble.com/userupload/9903003/file/original-8eae5aec60527b67b7678e42aa2d8645.jpg?resize=752x"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {resList.map((restaurent) => (
        <RestaurentCard key={restaurent.info.id} resData={restaurent} />
      ))}
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);