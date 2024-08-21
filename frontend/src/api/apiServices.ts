import {CART_URL, PRODUCTS_URL, SIGNIN_URL, SIGNUP_URL, TRENDING_URL, USER_URL, WISHLIST_URL} from "./apiUrls.ts";

export const signupService = async (username: string, email: string, password: string) => {
    return await fetch(SIGNUP_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        }),
    });
}

export const signinService = async (username: string, password: string) => {
    return await fetch(SIGNIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });
}

export const userDetailsService = async (token: string) => {
    return await fetch(USER_URL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
}

export const productsService = async () => {
    return await fetch(PRODUCTS_URL, {
        method: 'GET',
    });
}

export const productDetailsService = async (productId: string | undefined) => {
    return await fetch(`${PRODUCTS_URL}/${productId}`, {
        method: 'GET',
    });
}

export const trendingService = async () => {
    return await fetch(TRENDING_URL, {
        method: 'GET',
    });
}

export const addCartItemService = async (productId: string, token: string) => {
    return await fetch(`${CART_URL}/${productId}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
}

export const deleteCartItemService = async (productId: string, token: string) => {
    return await fetch(`${CART_URL}/${productId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
}

export const addWishlistItemService = async (productId: string, token: string) => {
    return await fetch(`${WISHLIST_URL}/${productId}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
}

export const deleteWishlistItemService = async (productId: string, token: string) => {
    return await fetch(`${WISHLIST_URL}/${productId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
}
