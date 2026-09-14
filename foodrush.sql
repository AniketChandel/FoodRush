
create table restaurants (
    id int auto_increment primary key,
    owner_id int,
    name varchar(100),
    phone varchar(15),
    address varchar(255),
    state varchar(50),
    city varchar(50),
    description text,
    opening_time time,
    closing_time time,
    image varchar(255),
    latitude double,
    longitude double,
    unique_id varchar(100) unique
);

create table users (
    id int auto_increment primary key,
    name varchar(100) not null,
    email varchar(100) not null unique,
    password varchar(255) not null,
    phone varchar(15) not null,
    role varchar(20)
);

create table foods (
    id int auto_increment primary key,
    restaurant_id int,
    food_name varchar(100),
    price decimal(10,2),
    description text,
    category varchar(50),
    type varchar(10)
);
