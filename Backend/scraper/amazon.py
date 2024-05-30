from asyncio import gather


# Asynchronous function to get stock information from a product division
async def get_stock(product_div):
    # Query for all elements with class 'a-size-base' inside the product division
    elements = await product_div.query_selector_all(".a-size-base")
    # Filter elements to only include those with 'stock' in their inner text
    filtered_elements = [
        element for element in elements if "stock" in await element.inner_text()
    ]
    return filtered_elements


# Asynchronous function to get product information from a product division
async def get_product(product_div):
    # Query for the necessary elements within the product division asynchronously
    image_element_future = product_div.query_selector("img.s-image")
    name_element_future = product_div.query_selector("h2 a span")
    price_element_future = product_div.query_selector("span.a-offscreen")
    url_element_future = product_div.query_selector(
        "a.a-link-normal.s-no-hover.s-underline-text.s-underline-link-text.s-link-style.a-text-normal"
    )

    # Await all queries at once using asyncio.gather for concurrency
    image_element, name_element, price_element, url_element = await gather(
        image_element_future,
        name_element_future,
        price_element_future,
        url_element_future,
        # get_stock(product_div)  # Uncomment if stock information is needed
    )

    # Fetch the 'src' attribute of the image element if it exists
    image_url = await image_element.get_attribute("src") if image_element else None
    # Fetch the inner text of the name element if it exists
    product_name = await name_element.inner_text() if name_element else None
    try:
        # Print and fetch the inner text of the price element, converting it to a float, if it exists
        print(
            (await price_element.inner_text()).replace("$", "").replace(",", "").strip()
        )
        product_price = (
            float(
                (await price_element.inner_text())
                .replace("$", "")
                .replace(",", "")
                .strip()
            )
            if price_element
            else None
        )
    except:
        # Handle any exception by setting the product price to None
        product_price = None
    # Fetch and process the 'href' attribute of the URL element if it exists
    product_url = (
        "/".join((await url_element.get_attribute("href")).split("/")[:4])
        if url_element
        else None
    )
    # stock = stock_element[0] if len(stock_element) > 0 else None  # Uncomment if stock information is needed

    # Return a dictionary containing the product information
    return {
        "img": image_url,
        "name": product_name,
        "price": product_price,
        "url": product_url,
    }
