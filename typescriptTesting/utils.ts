const returningUserDisplay = document.querySelector(
    "#returning-user"
  ) as HTMLHeadingElement;
  const userNameDisplay = document.querySelector("#user") as HTMLSpanElement;
  const reviewTotalDisplay = document.querySelector(
    "#reviews"
  ) as HTMLHeadingElement;
  
import { USERLEVEL, PERMISSIONS } from './enums'
import  {Review}  from './interfaces'

export function showReviewTotal(value: number, reviewer: string, isLoyalty: USERLEVEL) {
    const iconDisplay = USERLEVEL.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay    
}

export function populateUser(isReturning : boolean ,userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}

export function getTopTwoReviews(reviews : Review[]) : Review[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}