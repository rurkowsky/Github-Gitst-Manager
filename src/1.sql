CREATE TABLE products2 (
    product_no integer,
    name text,
    price numeric CHECK (price > 0),
    discounted_price numeric CHECK (discounted_price > 0),
    CHECK (price > discounted_price)
)
insert into products2 values(
1,'test2',-2,-4                    -- error price<0, price < discounted_price
)
insert into products2 values(
1,'test2',2,4               -- error price < discounted_price
)
insert into products2 values(
1,'test2',4, 2                        --dobrze
)