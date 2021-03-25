CREATE DATABASE content_aggregator;
USE content_aggregator;

CREATE TABLE settings (
    name VARCHAR(512) NOT NULL,
    value INT unsigned,
    PRIMARY KEY(name)
);

CREATE TABLE company (
    id INT unsigned NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) UNIQUE,
    PRIMARY KEY(id)
);

CREATE TABLE category (
    id INT unsigned NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) UNIQUE,
    PRIMARY KEY(id)
);

CREATE TABLE user (
    id INT unsigned NOT NULL AUTO_INCREMENT,
    name VARCHAR(512) NOT NULL,
    email VARCHAR(64) NOT NULL UNIQUE,
    company_id INT unsigned,
    subscription INT NOT NULL,
    role ENUM('ADMIN', 'APPROVER', 'USER'),
    created_at DATETIME,
    INDEX(email),

    PRIMARY KEY(id),
    FOREIGN KEY (company_id)
        REFERENCES company(id)
        ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE post (
    id INT unsigned NOT NULL AUTO_INCREMENT,
    url VARCHAR(512) NOT NULL,
    title VARCHAR(512) NOT NULL,
    company_id INT unsigned,
    category_id INT unsigned,
    user_id INT unsigned,
    published BOOLEAN DEFAULT false,
    blog_stream BOOLEAN NOT NULL,
    last_updated DATETIME DEFAULT NOW(),

    PRIMARY KEY(id),
    INDEX (company_id, category_id),
    INDEX (published),

    FOREIGN KEY (company_id)
        REFERENCES company(id)
        ON UPDATE CASCADE ON DELETE SET NULL,
    FOREIGN KEY (category_id)
        REFERENCES category(id)
        ON UPDATE CASCADE ON DELETE SET NULL,
    FOREIGN KEY (user_id)
        REFERENCES user(id)
        ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE post_approver (
    post_id INT unsigned NOT NULL,
    approver_id INT unsigned NOT NULL,

    PRIMARY KEY(post_id, approver_id),

    FOREIGN KEY (post_id)
        REFERENCES post(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (approver_id)
        REFERENCES user(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);