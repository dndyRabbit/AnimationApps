import faker from 'faker'
import niceColors from 'nice-color-palettes'
import {images} from '../constants'
faker.seed(1)

export const ORANGE = '#fb9b06'

const dinnerDatas = [
    {
        type:'soup',
        image:images.dinner1
    },
    {
        type:'salad',
        image:images.dinner2
    },
    {
        type:'rice',
        image:images.dinner3
    },
    {
        type:'sushi',
        image:images.dinner4
    },
    {
        type:'spaghetti',
        image:images.dinner5
    },
    {
        type:'pizza',
        image:images.dinner6
    },
    {
        type:'burger',
        image:images.dinner7
    },
    {
        type:'fried egg',
        image:images.dinner8
    },
    {
        type:'pancake',
        image:images.dinner9
    },
    {
        type:'french fries',
        image:images.dinner10
    },
    {
        type:'steak',
        image:images.dinner11
    },
    {
        type:'ice cream',
        image:images.dinner12
    },
    {
        type:'fried chicken',
        image:images.dinner13
    },
    {
        type:'cheese',
        image:images.dinner14
    },
    {
        type:'noodle',
        image:images.dinner15
    },
    {
        type:'beer',
        image:images.dinner16
    },
    {
        type:'lemon ice',
        image:images.dinner17
    },
    {
        type:'hot dog',
        image:images.dinner18
    },
    {
        type:'english breakfast',
        image:images.dinner19
    },
    {
        type:'tea',
        image:images.dinner20
    },
    {
        type:'lasagna',
        image:images.dinner21
    },
    {
        type:'cake',
        image:images.dinner22
    },
    {
        type:'donut',
        image:images.dinner23
    },
    {
        type:'fish',
        image:images.dinner24
    }
]

const colors = niceColors[1];

export const tabs = [
    'Today',
    'Chips',
    'Fish',
    'Tea',
    'Burger',
    'Coffee',
    'Drinks',
    'Breakfast'
]

export default dinnerDatas.map((item, index) => ({
    ...item,
    key: faker.random.uuid(),
    subType: faker.commerce.productName(),
    color: `${colors[index % colors.length]}66`,
    fullColor: colors[index % colors.length],
    description:[...Array(2).keys()]
        .map(faker.commerce.productDescription)
        .join('. '),
    price: `$${(faker.random.number(200) + 50) / 100}`,
    subcatagories: faker.helpers.shuffle(dinnerDatas).slice(0, 3)
}))

export const popularFood = faker.helpers.shuffle(dinnerDatas).map((item) => ({
    ...item,
    key: faker.random.uuid(),
    rating:(faker.random.number(30) + 20) / 10,
    price:`$${(faker.random.number(200) + 50) / 100}`
}))