INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_EMPLOYEE');
--
insert into users (email, password, username, reward_points, phone_number, address) values('employee@gmail.com', '$2a$10$Fu4GqNJie.NAQayS8tD0VOWQM4iIjl5brVoeRl8jMoOalQJkQYaVG', 'employee', 100, '1234567890', 'abcdfghjkl');
insert into user_roles (user_id, role_id) values (1, 2);

INSERT INTO hotel(country, hotelname, price, rating, state) VALUES('USA','SkyLine',1500,'4','California');
INSERT INTO hotel(country, hotelname, price, rating, state) VALUES('USA','Hyatt',1500,'3','Arizona');
INSERT INTO hotel(country, hotelname, price, rating, state) VALUES('USA','Marriot',1500,'2','Texas');
INSERT INTO hotel(country, hotelname, price, rating, state) VALUES('INDIA','Courtyard',1500,'1','Gujarat');
INSERT INTO hotel(country, hotelname, price, rating, state) VALUES('UK','Flamingo',1500,'2','London');
INSERT INTO hotel(country, hotelname, price, rating, state) VALUES('CANADA','Inception',1500,'3','Torronto');
INSERT INTO hotel(country, hotelname, price, rating, state) VALUES('CANADA','Nolan',1500,'5','Vancover');
INSERT INTO hotel(country, hotelname, price, rating, state) VALUES('INDIA','Hyatt',1500,'3','Gujarat');
INSERT INTO hotel(country, hotelname, price, rating, state) VALUES('UK','Hyatt',1500,'5','London');

INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SINGLE',1500, 1, 5);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_DOUBLE',3000, 1, 10);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SUITS',4500, 1, 20);

INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SINGLE',1500, 2, 15);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_DOUBLE',3000, 2, 15);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SUITS',4500, 2, 15);

INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SINGLE',1500, 3, 15);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_DOUBLE',3000, 3, 15);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SUITS',4500, 3, 15);

INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SINGLE',1500, 4, 15);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_DOUBLE',3000, 4, 15);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SUITS',4500, 4, 15);

INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SINGLE',1500, 5, 15);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_DOUBLE',3000, 5, 15);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SUITS',4500, 5, 15);

INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SINGLE',2500, 6, 15);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_DOUBLE',4000, 6, 15);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SUITS',5500, 6, 15);

INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SINGLE',2000, 7, 10);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_DOUBLE',3000, 7, 20);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SUITS',5500, 7, 16);

INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SINGLE',1500, 8, 10);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_DOUBLE',3000, 8, 20);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SUITS',4500, 8, 16);

INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SINGLE',500, 9, 10);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_DOUBLE',2000, 9, 20);
INSERT INTO room(name, price, hotel_id, available_rooms) VALUES('ROOM_SUITS',3500, 9, 16);



INSERT INTO Amenities(name, hotel_id) VALUES('FITNESS_ROOM', 1);
INSERT INTO Amenities(name, hotel_id) VALUES('JACCUZZI', 1);
INSERT INTO Amenities(name, hotel_id) VALUES('BREAKFAST', 1);
INSERT INTO Amenities(name, hotel_id) VALUES('ALL_MEALS_INCLUDED', 1);
INSERT INTO Amenities(name, hotel_id) VALUES('DAILY_PARKING', 1);




INSERT INTO Amenities(name, hotel_id) VALUES('FITNESS_ROOM', 2);
INSERT INTO Amenities(name, hotel_id) VALUES('JACCUZZI', 2);
INSERT INTO Amenities(name, hotel_id) VALUES('BREAKFAST', 2);
INSERT INTO Amenities(name, hotel_id) VALUES('ALL_MEALS_INCLUDED', 2);
INSERT INTO Amenities(name, hotel_id) VALUES('DAILY_PARKING', 2);



INSERT INTO Amenities(name, hotel_id) VALUES('FITNESS_ROOM', 3);
INSERT INTO Amenities(name, hotel_id) VALUES('JACCUZZI', 3);
INSERT INTO Amenities(name, hotel_id) VALUES('BREAKFAST', 3);
INSERT INTO Amenities(name, hotel_id) VALUES('ALL_MEALS_INCLUDED', 3);
INSERT INTO Amenities(name, hotel_id) VALUES('DAILY_PARKING', 3);



INSERT INTO Amenities(name, hotel_id) VALUES('FITNESS_ROOM', 4);
INSERT INTO Amenities(name, hotel_id) VALUES('JACCUZZI', 4);
INSERT INTO Amenities(name, hotel_id) VALUES('BREAKFAST', 4);
INSERT INTO Amenities(name, hotel_id) VALUES('ALL_MEALS_INCLUDED', 4);
INSERT INTO Amenities(name, hotel_id) VALUES('DAILY_PARKING', 4);



INSERT INTO Amenities(name, hotel_id) VALUES('FITNESS_ROOM', 5);
INSERT INTO Amenities(name, hotel_id) VALUES('JACCUZZI', 5);
INSERT INTO Amenities(name, hotel_id) VALUES('BREAKFAST', 5);
INSERT INTO Amenities(name, hotel_id) VALUES('ALL_MEALS_INCLUDED', 5);
INSERT INTO Amenities(name, hotel_id) VALUES('DAILY_PARKING', 5);


INSERT INTO Amenities(name, hotel_id) VALUES('FITNESS_ROOM', 6);
INSERT INTO Amenities(name, hotel_id) VALUES('JACCUZZI', 6);
INSERT INTO Amenities(name, hotel_id) VALUES('BREAKFAST', 6);
INSERT INTO Amenities(name, hotel_id) VALUES('ALL_MEALS_INCLUDED', 6);
INSERT INTO Amenities(name, hotel_id) VALUES('DAILY_PARKING', 6);



INSERT INTO Amenities(name, hotel_id) VALUES('FITNESS_ROOM', 7);
INSERT INTO Amenities(name, hotel_id) VALUES('JACCUZZI', 7);
INSERT INTO Amenities(name, hotel_id) VALUES('BREAKFAST', 7);
INSERT INTO Amenities(name, hotel_id) VALUES('ALL_MEALS_INCLUDED', 7);
INSERT INTO Amenities(name, hotel_id) VALUES('DAILY_PARKING', 7);


INSERT INTO Amenities(name, hotel_id) VALUES('FITNESS_ROOM', 8);
INSERT INTO Amenities(name, hotel_id) VALUES('JACCUZZI', 8);
INSERT INTO Amenities(name, hotel_id) VALUES('BREAKFAST', 8);
INSERT INTO Amenities(name, hotel_id) VALUES('ALL_MEALS_INCLUDED', 8);
INSERT INTO Amenities(name, hotel_id) VALUES('DAILY_PARKING', 8);


INSERT INTO Amenities(name, hotel_id) VALUES('FITNESS_ROOM', 9);
INSERT INTO Amenities(name, hotel_id) VALUES('JACCUZZI', 9);
INSERT INTO Amenities(name, hotel_id) VALUES('BREAKFAST', 9);
INSERT INTO Amenities(name, hotel_id) VALUES('ALL_MEALS_INCLUDED', 9);
INSERT INTO Amenities(name, hotel_id) VALUES('DAILY_PARKING', 9);



--INSERT INTO HOTEL_AMENITIES(hotel_id, amenities_id) VALUES(1,2);
--INSERT INTO HOTEL_AMENITIES(hotel_id, amenities_id) VALUES(2,1);
--INSERT INTO HOTEL_AMENITIES(hotel_id, amenities_id) VALUES(1,1);
--INSERT INTO HOTEL_AMENITIES(hotel_id, amenities_id) VALUES(2,2);
--INSERT INTO HOTEL_AMENITIES(hotel_id, amenities_id) VALUES(3,1);
--INSERT INTO HOTEL_AMENITIES(hotel_id, amenities_id) VALUES(2,3);
--INSERT INTO HOTEL_AMENITIES(hotel_id, amenities_id) VALUES(3,2);
--INSERT INTO HOTEL_AMENITIES(hotel_id, amenities_id) VALUES(3,3);

--INSERT INTO HOTEL_ROOMS(hotel_id, room_id) VALUES(1,2);
--INSERT INTO HOTEL_ROOMS(hotel_id, room_id) VALUES(2,2);
--INSERT INTO HOTEL_ROOMS(hotel_id, room_id) VALUES(3,2);
--INSERT INTO HOTEL_ROOMS(hotel_id, room_id) VALUES(1,1);
--INSERT INTO HOTEL_ROOMS(hotel_id, room_id) VALUES(2,1);
--INSERT INTO HOTEL_ROOMS(hotel_id, room_id) VALUES(3,1);
--INSERT INTO HOTEL_ROOMS(hotel_id, room_id) VALUES(1,3);
--INSERT INTO HOTEL_ROOMS(hotel_id, room_id) VALUES(2,3);
--INSERT INTO HOTEL_ROOMS(hotel_id, room_id) VALUES(3,3);


--
--insert into booking(no_of_adults, no_of_childrens, hotel_id, user_id) values (1, 0, 1, 1);
--insert into booking_amenities(booking_id, amenities_id) values (1, 1);
--insert into booking_amenities(booking_id, amenities_id) values (1, 2);
--insert into booking_amenities(booking_id, amenities_id) values (1, 3);
--
--insert into booking_rooms(booking_id, room_id) values (1, 1);










