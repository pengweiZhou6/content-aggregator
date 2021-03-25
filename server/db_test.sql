# insert 20 settings
INSERT INTO settings(name, value) VALUES ('User Approval Threshold', 4);
INSERT INTO settings(name, value) VALUES ('Admin Approval Threshold', 2);

# insert 8 companies
INSERT INTO company(name) VALUES ('Galvanize');
INSERT INTO company(name) VALUES ('Visier');
INSERT INTO company(name) VALUES ('Tasktop');
INSERT INTO company(name) VALUES ('Hootsuite');
INSERT INTO company(name) VALUES ('Procurify');
INSERT INTO company(name) VALUES ('Radical IO');
INSERT INTO company(name) VALUES ('Clio');
INSERT INTO company(name) VALUES ('Other');

# insert 8 categories
INSERT INTO category(name) VALUES ('Development');
INSERT INTO category(name) VALUES ('Data');
INSERT INTO category(name) VALUES ('Design');
INSERT INTO category(name) VALUES ('Diversity');
INSERT INTO category(name) VALUES ('AI');
INSERT INTO category(name) VALUES ('Engineering');
INSERT INTO category(name) VALUES ('DevOps');
INSERT INTO category(name) VALUES ('Career');
INSERT INTO category(name) VALUES ('Culture');
INSERT INTO category(name) VALUES ('News');

# insert 200 users
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (1, 'Vickie Yen', 'yenvickie@gmail.com', 1, 0, 'ADMIN', '2020-01-01 17:11:12.007700');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (2, 'Yuting Wen', 'blackalkane@gmail.com', 2, 0, 'ADMIN', '2020-01-02 17:11:12.008095');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (3, 'David Guo', 'davidguo1998@hotmail.com', 3, 1, 'ADMIN', '2020-01-03 17:11:12.008105');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (4, 'David Guo', 'pizzashate@gmail.com', 4, 1, 'ADMIN', '2020-01-04 17:11:12.008111');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (5, 'Peter Han', 'hanzhaolong0410@gmail.com', 5, 0, 'ADMIN', '2020-01-05 17:11:12.008116');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (6, 'Pengwei Zhou', 'Pengweizhou6@gmail.com', 6, 0, 'ADMIN', '2020-01-06 17:11:12.008120');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (7, 'Tony Kong', 'tonykongg@gmail.com', NULL, 0, 'ADMIN', '2020-01-07 17:11:12.008125');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (8, 'Arthur Marques', 'marques.s.arthur@gmail.com', 1, 0, 'ADMIN', '2020-01-08 17:11:12.008129');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (9, 'Tyler Nee', 'tyler.nee@gmail.com', 2, 0, 'ADMIN', '2020-01-09 17:11:12.008134');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (10, 'Jerry Jim', 'jerryjim.cad@gmail.com', 3, 0, 'ADMIN', '2020-01-10 17:11:12.008138');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (11, 'Test User', 'galvatronuser123@gmail.com', 4, 0, 'USER', '2020-01-02 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (12, 'Test Approver', 'galvatronapprover123@gmail.com', 5, 0, 'APPROVER', '2020-01-02 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (13, 'Test Admin', 'galvatronmaster123@gmail.com', 6, 0, 'ADMIN', '2020-01-02 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (14, 'Hank Rox', 'hanktester989@gmail.com', NULL, 0, 'ADMIN', '2020-04-07 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (15, 'Jimmy Jon', 'heyimjimmyforgal@gmail.com', NULL, 0, 'USER', '2020-04-07 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (16, 'Peter Smith', 'northvankiwiguy@gmail.com', 1, 0, 'ADMIN', '2020-04-14 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (17, 'Charlotte Web', 'user17@gmail.com', 3, 0, 'APPROVER', '2020-01-02 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (18, 'Isla Smith', 'user18@gmail.com', 4, 0, 'USER', '2020-01-02 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (19, 'Ava Lee', 'user19@gmail.com', 5, 0, 'ADMIN', '2020-01-02 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (20, 'Aurora Sky', 'user20@gmail.com', 6, 0, 'APPROVER', '2020-01-02 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (21, 'Evelyn Johnson', 'user21@gmail.com', NULL, 0, 'USER', '2020-01-02 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (22, 'Penelope Piper', 'user22@gmail.com', 1, 0, 'ADMIN', '2020-01-03 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (23, 'Eleanor Williams', 'user23@gmail.com', 2, 0, 'APPROVER', '2020-01-03 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (24, 'Peter Rose', 'user24@gmail.com', 3, 0, 'USER', '2020-01-03 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (25, 'Cora Davis', 'user25@gmail.com', 4, 0, 'ADMIN', '2020-01-03 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (26, 'Violet Green', 'user26@gmail.com', 5, 0, 'APPROVER', '2020-01-03 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (27, 'Luna Sun', 'user27@gmail.com', 6, 0, 'USER', '2020-01-03 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (28, 'Hazel Smith', 'user28@gmail.com', NULL, 0, 'ADMIN', '2020-01-03 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (29, 'Thea Williams', 'user29@gmail.com', 1, 0, 'APPROVER', '2020-01-03 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (30, 'Lucy Lee', 'user30@gmail.com', 2, 0, 'USER', '2020-01-03 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (31, 'Audrey Hepburn', 'user31@gmail.com', 3, 0, 'ADMIN', '2020-01-03 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (32, 'Emma Snow', 'user32@gmail.com', 4, 0, 'APPROVER', '2020-01-03 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (33, 'Claire Stone', 'user33@gmail.com', 5, 0, 'USER', '2020-01-03 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (34, 'Sadie Smith', 'user34@gmail.com', 6, 0, 'ADMIN', '2020-01-04 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (35, 'Mia Mae', 'user35@gmail.com', NULL, 0, 'APPROVER', '2020-01-04 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (36, 'May Smith', 'user36@gmail.com', 1, 0, 'USER', '2020-01-04 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (37, 'Ivy Lam', 'user37@gmail.com', 2, 0, 'ADMIN', '2020-01-04 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (38, 'Scarlett Joe', 'user38@gmail.com', 3, 0, 'APPROVER', '2020-01-04 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (39, 'Jane Eyre', 'user39@gmail.com', 4, 0, 'USER', '2020-01-04 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (40, 'Iris Sun', 'user40@gmail.com', 5, 0, 'ADMIN', '2020-01-04 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (41, 'Lilly Cole', 'user41@gmail.com', 6, 0, 'APPROVER', '2020-01-04 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (42, 'Lydia Lee', 'user42@gmail.com', NULL, 0, 'USER', '2020-01-04 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (43, 'Elise Cameron', 'user43@gmail.com', 1, 0, 'ADMIN', '2020-01-04 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (44, 'Eva Brown', 'user44@gmail.com', 2, 0, 'APPROVER', '2020-01-04 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (45, 'Julia Fay', 'user45@gmail.com', 3, 0, 'USER', '2020-01-04 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (46, 'Brian Smith', 'user46@gmail.com', 4, 0, 'ADMIN', '2020-01-05 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (47, 'Cameron Brown', 'user47@gmail.com', 5, 0, 'APPROVER', '2020-01-05 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (48, 'Poppy Fay', 'user48@gmail.com', 6, 0, 'USER', '2020-01-05 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (49, 'Bob Lam', 'user49@gmail.com', NULL, 0, 'ADMIN', '2020-01-05 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (50, 'John Phillips', 'user50@gmail.com', 1, 0, 'APPROVER', '2020-01-05 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (51, 'Phillip Wong', 'user51@gmail.com', 2, 0, 'USER', '2020-01-05 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (52, 'Jacob Felt', 'user52@gmail.com', 3, 0, 'ADMIN', '2020-01-05 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (53, 'Roger Jones', 'user53@gmail.com', 4, 0, 'APPROVER', '2020-01-05 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (54, 'Grace Sun', 'user54@gmail.com', 5, 0, 'USER', '2020-01-05 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (55, 'Stephanie Sun', 'user55@gmail.com', 6, 0, 'ADMIN', '2020-01-05 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (56, 'Emily Fay', 'user56@gmail.com', NULL, 0, 'APPROVER', '2020-01-05 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (57, 'Faith Miller', 'user57@gmail.com', 1, 0, 'USER', '2020-01-05 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (58, 'Joe Clark', 'user58@gmail.com', 2, 0, 'ADMIN', '2020-01-06 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (59, 'Tyler Brown', 'user59@gmail.com', 3, 0, 'APPROVER', '2020-01-06 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (60, 'Victoria Williams', 'user60@gmail.com', 4, 0, 'USER', '2020-01-06 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (61, 'Jennifer Li', 'user61@gmail.com', 5, 0, 'ADMIN', '2020-01-06 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (62, 'William Green', 'user62@gmail.com', 6, 0, 'APPROVER', '2020-01-06 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (63, 'Jim Carrey', 'user63@gmail.com', NULL, 0, 'USER', '2020-01-06 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (64, 'Nelly Wood', 'user64@gmail.com', 1, 0, 'ADMIN', '2020-01-06 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (65, 'Robin Lee', 'user65@gmail.com', 2, 0, 'APPROVER', '2020-01-06 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (66, 'Ruby Sun', 'user66@gmail.com', 3, 0, 'USER', '2020-01-06 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (67, 'Joanna Santos', 'user67@gmail.com', 4, 0, 'ADMIN', '2020-01-06 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (68, 'Alex King', 'user68@gmail.com', 5, 0, 'APPROVER', '2020-01-06 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (69, 'Alexis Smith', 'user69@gmail.com', 6, 0, 'USER', '2020-01-06 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (70, 'Angel Bernard', 'user70@gmail.com', NULL, 0, 'ADMIN', '2020-01-07 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (71, 'David Lam', 'user71@gmail.com', 1, 0, 'APPROVER', '2020-01-07 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (72, 'Leroy Chen', 'user72@gmail.com', 2, 0, 'USER', '2020-01-07 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (73, 'Vince Smith', 'user73@gmail.com', 3, 0, 'ADMIN', '2020-01-07 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (74, 'Bert Robin', 'user74@gmail.com', 4, 0, 'APPROVER', '2020-01-07 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (75, 'John Fall', 'user75@gmail.com', 5, 0, 'USER', '2020-01-07 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (76, 'Meridith Mills', 'user76@gmail.com', 6, 0, 'ADMIN', '2020-01-07 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (77, 'Sam Smith', 'user77@gmail.com', NULL, 0, 'APPROVER', '2020-01-07 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (78, 'Peter Brown', 'user78@gmail.com', 1, 0, 'USER', '2020-01-07 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (79, 'Ray Li', 'user79@gmail.com', 2, 0, 'ADMIN', '2020-01-07 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (80, 'Tiffany Ann', 'user80@gmail.com', 3, 0, 'APPROVER', '2020-01-07 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (81, 'Jenny Kim', 'user81@gmail.com', 4, 0, 'USER', '2020-01-07 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (82, 'Tommy Rafael', 'user82@gmail.com', 5, 0, 'ADMIN', '2020-01-08 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (83, 'Matthew Mae', 'user83@gmail.com', 6, 0, 'APPROVER', '2020-01-08 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (84, 'George Smith', 'user84@gmail.com', NULL, 0, 'USER', '2020-01-08 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (85, 'Mario Sit', 'user85@gmail.com', 1, 0, 'ADMIN', '2020-01-08 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (86, 'Oscar Lopez', 'user86@gmail.com', 2, 0, 'APPROVER', '2020-01-08 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (87, 'Jacky Brown', 'user87@gmail.com', 3, 0, 'USER', '2020-01-08 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (88, 'Sharon Kan', 'user88@gmail.com', 4, 0, 'ADMIN', '2020-01-08 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (89, 'Jessica Fay', 'user89@gmail.com', 5, 0, 'APPROVER', '2020-01-08 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (90, 'Dean Sol', 'user90@gmail.com', 6, 0, 'USER', '2020-01-08 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (91, 'Samantha Huang', 'user91@gmail.com', NULL, 0, 'ADMIN', '2020-01-08 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (92, 'Jonathan Frye', 'user92@gmail.com', 1, 0, 'APPROVER', '2020-01-08 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (93, 'Harrison Lee', 'user93@gmail.com', 2, 0, 'USER', '2020-01-08 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (94, 'Robin Ray', 'user94@gmail.com', 3, 0, 'ADMIN', '2020-01-09 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (95, 'Ray Wong', 'user95@gmail.com', 4, 0, 'APPROVER', '2020-01-09 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (96, 'Annie Brown', 'user96@gmail.com', 5, 0, 'USER', '2020-01-09 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (97, 'William Smith', 'user97@gmail.com', 6, 0, 'ADMIN', '2020-01-09 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (98, 'Jonathan Smith', 'user98@gmail.com', NULL, 0, 'APPROVER', '2020-01-09 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (99, 'Daisy Furtado', 'user99@gmail.com', 1, 0, 'USER', '2020-01-09 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (100, 'Rose Lee', 'user100@gmail.com', 2, 0, 'ADMIN', '2020-01-09 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (101, 'Clement Chu', 'user101@gmail.com', 3, 0, 'APPROVER', '2020-01-09 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (102, 'Betty Brown', 'user102@gmail.com', 4, 0, 'USER', '2020-01-09 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (103, 'Jane Carmichael', 'user103@gmail.com', 5, 0, 'ADMIN', '2020-01-09 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (104, 'Ryan Diaz', 'user104@gmail.com', 6, 0, 'APPROVER', '2020-01-09 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (105, 'Cliff Jones', 'user105@gmail.com', NULL, 0, 'USER', '2020-01-09 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (106, 'Penny Diaz', 'user106@gmail.com', 1, 0, 'ADMIN', '2020-01-10 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (107, 'Penny Clifford', 'user107@gmail.com', 2, 0, 'APPROVER', '2020-01-10 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (108, 'Ira Sawyer', 'user108@gmail.com', 3, 0, 'USER', '2020-01-10 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (109, 'Vinnie Tyler', 'user109@gmail.com', 4, 0, 'ADMIN', '2020-01-10 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (110, 'Penny Gilmore', 'user110@gmail.com', 5, 0, 'APPROVER', '2020-01-10 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (111, 'Betsy Smith', 'user111@gmail.com', 6, 0, 'USER', '2020-01-10 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (112, 'Erica Allen', 'user112@gmail.com', NULL, 0, 'ADMIN', '2020-01-10 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (113, 'Martin Walker', 'user113@gmail.com', 1, 0, 'APPROVER', '2020-01-10 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (114, 'Kacie Gilmore', 'user114@gmail.com', 2, 0, 'USER', '2020-01-10 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (115, 'Helen McTiernan', 'user115@gmail.com', 3, 0, 'ADMIN', '2020-01-10 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (116, 'Jennifer Allen', 'user116@gmail.com', 4, 0, 'APPROVER', '2020-01-10 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (117, 'Erica Walker', 'user117@gmail.com', 5, 0, 'USER', '2020-01-10 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (118, 'Martin Ackmerna', 'user118@gmail.com', 6, 0, 'ADMIN', '2020-01-11 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (119, 'Kelly Jones', 'user119@gmail.com', NULL, 0, 'APPROVER', '2020-01-11 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (120, 'Glenn Smith', 'user120@gmail.com', 1, 0, 'USER', '2020-01-11 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (121, 'Randy Moore', 'user121@gmail.com', 2, 0, 'ADMIN', '2020-01-11 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (122, 'Alan Wu', 'user122@gmail.com', 3, 0, 'APPROVER', '2020-01-11 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (123, 'Tom Green', 'user123@gmail.com', 4, 0, 'USER', '2020-01-11 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (124, 'Davie Queen', 'user124@gmail.com', 5, 0, 'ADMIN', '2020-01-11 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (125, 'Jone White', 'user125@gmail.com', 6, 0, 'APPROVER', '2020-01-11 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (126, 'John Connor', 'user126@gmail.com', NULL, 0, 'USER', '2020-01-11 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (127, 'Kacy Poplar', 'user127@gmail.com', 1, 0, 'ADMIN', '2020-01-11 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (128, 'Vera Owens', 'user128@gmail.com', 2, 0, 'APPROVER', '2020-01-11 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (129, 'Lucilia Tiger', 'user129@gmail.com', 3, 0, 'USER', '2020-01-11 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (130, 'Gavin Lee', 'user130@gmail.com', 4, 0, 'ADMIN', '2020-01-12 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (131, 'Leslie Bee', 'user131@gmail.com', 5, 0, 'APPROVER', '2020-01-12 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (132, 'Elliot Lam', 'user132@gmail.com', 6, 0, 'USER', '2020-01-12 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (133, 'Ellen Brown', 'user133@gmail.com', NULL, 0, 'ADMIN', '2020-01-12 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (134, 'Eric Wong', 'user134@gmail.com', 1, 0, 'APPROVER', '2020-01-12 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (135, 'Alice Cooper', 'user135@gmail.com', 2, 0, 'USER', '2020-01-12 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (136, 'Stephanie Armstrong', 'user136@gmail.com', 3, 0, 'ADMIN', '2020-01-12 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (137, 'Bill Gates', 'user137@gmail.com', 4, 0, 'APPROVER', '2020-01-12 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (138, 'Tom Starr', 'user138@gmail.com', 5, 0, 'USER', '2020-01-12 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (139, 'Alice Johnson', 'user139@gmail.com', 6, 0, 'ADMIN', '2020-01-12 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (140, 'Joe Smith', 'user140@gmail.com', NULL, 0, 'APPROVER', '2020-01-12 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (141, 'Karlie Anderson', 'user141@gmail.com', 1, 0, 'USER', '2020-01-12 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (142, 'Joanna Olson', 'user142@gmail.com', 2, 0, 'ADMIN', '2020-01-13 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (143, 'Steve Svensson', 'user143@gmail.com', 3, 0, 'APPROVER', '2020-01-13 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (144, 'Miranda Roberts', 'user144@gmail.com', 4, 0, 'USER', '2020-01-13 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (145, 'John Syre', 'user145@gmail.com', 5, 0, 'ADMIN', '2020-01-13 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (146, 'Sandra Josephs', 'user146@gmail.com', 6, 0, 'APPROVER', '2020-01-13 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (147, 'David San', 'user147@gmail.com', NULL, 0, 'USER', '2020-01-13 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (148, 'Raphael Rose', 'user148@gmail.com', 1, 0, 'ADMIN', '2020-01-13 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (149, 'Fred Hallock', 'user149@gmail.com', 2, 0, 'APPROVER', '2020-01-13 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (150, 'Daisy Pickle', 'user150@gmail.com', 3, 0, 'USER', '2020-01-13 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (151, 'Pat Macquire', 'user151@gmail.com', 4, 0, 'ADMIN', '2020-01-13 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (152, 'Lizzie Tinkle', 'user152@gmail.com', 5, 0, 'APPROVER', '2020-01-13 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (153, 'Betty Smith', 'user153@gmail.com', 6, 0, 'USER', '2020-01-13 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (154, 'Ann Chevron', 'user154@gmail.com', NULL, 0, 'ADMIN', '2020-01-14 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (155, 'Martin Lee', 'user155@gmail.com', 1, 0, 'APPROVER', '2020-01-14 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (156, 'Travis Sit', 'user156@gmail.com', 2, 0, 'USER', '2020-01-14 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (157, 'Richard Lee', 'user157@gmail.com', 3, 0, 'ADMIN', '2020-01-14 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (158, 'Fred Lam', 'user158@gmail.com', 4, 0, 'APPROVER', '2020-01-14 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (159, 'Debbie Wong', 'user159@gmail.com', 5, 0, 'USER', '2020-01-14 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (160, 'George Smith', 'user160@gmail.com', 6, 0, 'ADMIN', '2020-01-14 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (161, 'Gigi Smith', 'user161@gmail.com', NULL, 0, 'APPROVER', '2020-01-14 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (162, 'Jonathan Granger', 'user162@gmail.com', 1, 0, 'USER', '2020-01-14 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (163, 'Victoria Richard', 'user163@gmail.com', 2, 0, 'ADMIN', '2020-01-14 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (164, 'May Rose', 'user164@gmail.com', 3, 0, 'APPROVER', '2020-01-14 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (165, 'Jenny Moreau', 'user165@gmail.com', 4, 0, 'USER', '2020-01-14 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (166, 'Phillip Robert', 'user166@gmail.com', 5, 0, 'ADMIN', '2020-01-15 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (167, 'Robert Lee', 'user167@gmail.com', 6, 0, 'APPROVER', '2020-01-15 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (168, 'Crystal Smith', 'user168@gmail.com', NULL, 0, 'USER', '2020-01-15 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (169, 'Nellie Wu', 'user169@gmail.com', 1, 0, 'ADMIN', '2020-01-15 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (170, 'Johnny Thomas', 'user170@gmail.com', 2, 0, 'APPROVER', '2020-01-15 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (171, 'Robin Laurent', 'user171@gmail.com', 3, 0, 'USER', '2020-01-15 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (172, 'Grace Heard', 'user172@gmail.com', 4, 0, 'ADMIN', '2020-01-15 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (173, 'Mabel Gagne', 'user173@gmail.com', 5, 0, 'APPROVER', '2020-01-15 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (174, 'Allison Smith', 'user174@gmail.com', 6, 0, 'USER', '2020-01-15 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (175, 'Doug Mitchell', 'user175@gmail.com', NULL, 0, 'ADMIN', '2020-01-15 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (176, 'Paige Pet', 'user176@gmail.com', 1, 0, 'APPROVER', '2020-01-15 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (177, 'Sam Dupuis', 'user177@gmail.com', 2, 0, 'USER', '2020-01-15 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (178, 'Charlotte Wu', 'user178@gmail.com', 3, 0, 'ADMIN', '2020-01-16 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (179, 'Dan Cook', 'user179@gmail.com', 4, 0, 'APPROVER', '2020-01-16 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (180, 'Charlie Fournier', 'user180@gmail.com', 5, 0, 'USER', '2020-01-16 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (181, 'Kevin Durand', 'user181@gmail.com', 6, 0, 'ADMIN', '2020-01-16 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (182, 'Jaimie Laurent', 'user182@gmail.com', NULL, 0, 'APPROVER', '2020-01-16 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (183, 'Sharon Linville', 'user183@gmail.com', 1, 0, 'USER', '2020-01-16 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (184, 'Aaron Smith', 'user184@gmail.com', 2, 0, 'ADMIN', '2020-01-16 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (185, 'Betty Bose', 'user185@gmail.com', 3, 0, 'APPROVER', '2020-01-16 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (186, 'Robin Smith', 'user186@gmail.com', 4, 0, 'USER', '2020-01-16 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (187, 'Richard Lee', 'user187@gmail.com', 5, 0, 'ADMIN', '2020-01-16 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (188, 'Katie Stewart', 'user188@gmail.com', 6, 0, 'APPROVER', '2020-01-16 21:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (189, 'Cassandra Newman', 'user189@gmail.com', NULL, 0, 'USER', '2020-01-16 23:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (190, 'Felix Lee', 'user190@gmail.com', 1, 0, 'ADMIN', '2020-01-17 01:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (191, 'Wesley Chen', 'user191@gmail.com', 2, 0, 'APPROVER', '2020-01-17 03:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (192, 'Miles Lee', 'user192@gmail.com', 3, 0, 'USER', '2020-01-17 05:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (193, 'Johnny Smith', 'user193@gmail.com', 4, 0, 'ADMIN', '2020-01-17 07:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (194, 'Aaron Browns', 'user194@gmail.com', 5, 0, 'APPROVER', '2020-01-17 09:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (195, 'Tia Durand', 'user195@gmail.com', 6, 0, 'USER', '2020-01-17 11:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (196, 'Lauren Brown', 'user196@gmail.com', NULL, 0, 'ADMIN', '2020-01-17 13:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (197, 'Tina Lee', 'user197@gmail.com', 1, 0, 'APPROVER', '2020-01-17 15:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (198, 'Bruno Brown', 'user198@gmail.com', 2, 0, 'USER', '2020-01-17 17:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (199, 'Samantha Wong', 'user199@gmail.com', 3, 0, 'ADMIN', '2020-01-17 19:30:00');
INSERT INTO user(id, name, email, company_id, subscription, role, created_at)
  VALUES (200, 'Fred Smith', 'user200@gmail.com', 4, 0, 'APPROVER', '2020-01-17 21:30:00');

# insert 50 posts (5 unpublished)
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (1, 'https://medium.com/galvanize/forming-software-development-teams-ec45db00cab6', 'Forming Software Development Teams', 1, 1, 1, True, False, '2020-01-02 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (2, 'https://medium.com/galvanize/message-queues-in-database-transactions-f830718f4f12', 'Message Queues in Database Transactions', 1, 2, 2, True, False, '2020-01-03 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (3, 'https://medium.com/galvanize/why-i-search-with-grep-9f9bd5203f6c', 'Why I Search With Grep', 1, 1, 3, True, False, '2020-01-04 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (4, 'https://www.wegalvanize.com/risk/risk-internal-control-design/', 'How risk drives internal control design', 1, 3, 4, True, False, '2020-01-05 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (5, 'https://www.wegalvanize.com/culture/diversity-inclusion-business-sense/', '4 ways diversity & inclusion is good for business', 1, 4, 5, True, False, '2020-01-06 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (6, 'https://www.visier.com/clarity/how-ai-will-reconfigure-human-roles/', 'How AI Will Reconfigure Human Roles Over the Next Decade', 2, 5, 6, True, False, '2020-01-07 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (7, 'https://www.tasktop.com/blog/international-womens-day-2020/', 'International Women Day 2020', 3, 4, 7, True, False, '2020-01-08 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (8, 'https://www.tasktop.com/blog/just-in-time-design-in-software-delivery-how-to-avoid-4-sources-of-waste-in-design/', 'Just-in-time design in software delivery: how to avoid 4 sources of waste in design', 3, 3, 8, True, False, '2020-01-09 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (9, 'https://www.tasktop.com/blog/refactoring-towards-speed-reading/', 'Refactoring towards speed-reading', 3, 6, 9, True, False, '2020-01-10 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (10, 'https://www.tasktop.com/blog/9369-2/', 'Discussing the considerations and impacts of automation', 3, 7, 10, False, False, '2020-01-11 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (11, 'https://medium.com/hootsuite-engineering/my-experiences-with-a-b-testing-f60d1b96e07c', 'My Experiences with A/B Testing', 4, 1, 11, True, False, '2020-01-12 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (12, 'https://medium.com/hootsuite-engineering/migrating-a-codebase-to-react-16-some-takeaways-d187018db8ca', 'Migrating a codebase to React 16: some takeaways', 4, 1, 12, True, False, '2020-01-13 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (13, 'https://medium.com/procurify-engineer/how-are-you-using-code-reviews-1ed79340592a', 'How are you using Code Reviews?', 5, 1, 13, True, False, '2020-01-14 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (14, 'https://medium.com/procurify-engineer/speed-up-your-build-pipeline-e7cdb4d41575', 'Speed Up Your Build Pipeline', 5, 7, 14, True, False, '2020-01-15 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (15, 'https://www.radical.io/ideas/women-in-leadership-surviving-and-thriving', 'Women in Leadership: Surviving and Thriving', 6, 4, 15, True, False, '2020-01-16 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (16, 'https://www.radical.io/ideas/kathryn-career-transition', 'Career transition in action: from student advisor to digital project manager...a big learning curve!', 6, 7, 16, True, False, '2020-01-17 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (17, 'https://www.radical.io/ideas/empathy-and-running-a-usability-and-citizen-centered-design-workshop', 'Empathy and Running a Usability and Citizen-Centered Design Workshop', 6, 3, 17, True, False, '2020-01-18 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (18, 'https://labs.clio.com/using-your-test-suite-to-educate-with-guard-rails-4e3f74623094', 'Using your test suite to educate with guard rails', 7, 1, 18, True, False, '2020-01-19 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (19, 'https://labs.clio.com/designers-at-clio-bailey-copithorne-senior-product-designer-343d34f233a5', 'Designers at Clio: Bailey Copithorne, Senior Product Designer', 7, 3, 19, True, False, '2020-01-20 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (20, 'https://labs.clio.com/how-we-doubled-the-representation-of-women-in-engineering-at-clio-2d9a4a1a0282', 'How we doubled the representation of women in Engineering at Clio', 7, 4, 20, False, False, '2020-01-21 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (21, 'https://www.wegalvanize.com/culture/impact-awards-2020/', 'Impact Awards 2020: Congratulations to our winners!', 1, 9, 21, True, False, '2020-01-22 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (22, 'https://www.wegalvanize.com/culture/impact-awards-2020/', 'Developing a tech-aware audit function', 1, 1, 22, True, False, '2020-01-23 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (23, 'https://www.wegalvanize.com/featured/managing-covid-19-risk/', 'Managing COVID-19 risk', 1, 9, 23, True, False, '2020-01-24 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (24, 'https://www.wegalvanize.com/news-releases/bcs-top-employers/', 'Galvanize Named One of BCs Top Employers for Seventh Consecutive Year', 1, 9, 24, True, False, '2020-01-25 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (25, 'https://www.wegalvanize.com/it/government-ransomware-attacks/', 'Why do governments suffer so many ransomware attacks?', 1, 6, 25, True, False, '2020-01-26 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (26, 'https://www.wegalvanize.com/risk/our-commitment-to-uninterrupted-service-safety-and-knowledge-sharing/', 'Our commitment to uninterrupted service, safety, and knowledge sharing', 1, 1, 26, True, False, '2020-01-27 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (27, 'https://www.wegalvanize.com/culture/how-vulnerability-strengthens-organizations/', 'How vulnerability strengthens organizations', 1, 9, 27, True, False, '2020-01-28 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (28, 'https://www.wegalvanize.com/culture/global-diversity-inclusion//', 'Achieving a global diversity & inclusion strategy', 1, 1, 28, True, False, '2020-01-29 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (29, 'https://www.wegalvanize.com/news-releases/new-galvanize-sydney/', 'Galvanize expands business in Australia', 1, 10, 29, True, False, '2020-01-30 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (30, 'https://www.wegalvanize.com/news-releases/forrester-wave/', 'Galvanize Named a Leader in Governance, Risk, and Compliance Software by Independent Research Firm', 1, 10, 30, False, False, '2020-01-31 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (31, 'https://www.wegalvanize.com/risk/cyber-risk-assessment/', 'How to conduct a cyber-risk assessment', 1, 6, 31, True, False, '2020-02-01 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (32, 'https://www.wegalvanize.com/culture/how-to-train-your-owners/', 'The dogs of GRrrC share how to train your owners', 1, 9, 32, True, False, '2020-02-02 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (33, 'https://www.wegalvanize.com/news-releases/canadas-best-managed-companies/', 'Galvanize Named One of Canadas Best Managed Companies for Second Consecutive Year', 1, 10, 33, True, False, '2020-02-03 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (34, 'https://www.wegalvanize.com/risk/risk-internal-control-design/', 'How risk drives internal control design', 1, 3, 34, True, False, '2020-02-04 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (35, 'https://www.tasktop.com/blog/integrating-qtest-and-azure-devops/', 'Optimize your QA Process by Integrating qTest and Azure DevOps', 3, 7, 35, True, False, '2020-02-05 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (36, 'https://www.tasktop.com/blog/tasktop-viz-launch/', 'Optimize your QA Process by Integrating qTest and Azure DevOps', 3, 7, 36, True, False, '2020-02-06 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (37, 'https://www.tasktop.com/blog/integrating-qtest-and-azure-devops/', 'Tasktop Viz Launched, Conquering the Cost of Delay', 3, 6, 37, True, False, '2020-02-07 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (38, 'https://www.tasktop.com/blog/servicenow-integration-use-cases/', '6 ServiceNow Integration Use Cases to Improve Software Delivery Efficiency', 3, 7, 38, True, False, '2020-02-08 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (39, 'https://www.tasktop.com/blog/covid-19-triggered-the-turning-point/', 'COVID-19 Triggered the Turning Point', 3, 10, 39, True, False, '2020-02-09 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (40, 'https://www.tasktop.com/blog/6-tips-to-master-working-remote/', '6 Tips to Master Working Remote', 3, 10, 40, False, False, '2020-02-10 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (41, 'https://www.visier.com/clarity/what-you-can-learn-about-crisis-management-from-the-people-analytics-community/', 'What You Can Learn About Crisis Management From the People Analytics Community', 2, 10, 41, True, False, '2020-02-11 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (42, 'https://www.visier.com/clarity/4-steps-to-building-a-business-case-for-diversity-and-inclusion/', '4 Steps to Building a Business Case for D&I', 2, 4, 42, True, False, '2020-02-12 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (43, 'https://www.visier.com/clarity/how-to-prepare-for-the-next-wave-of-hr-benchmarking/', 'How to Prepare for the Next Wave of HR Benchmarking', 2, 8, 43, True, False, '2020-02-13 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (44, 'https://www.visier.com/clarity/time-to-add-organizational-network-analysis-to-your-strategy/', 'Why Its Time to Add Organizational Network Analysis to Your Strategy', 2, 9, 44, True, False, '2020-02-14 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (45, 'https://www.visier.com/clarity/5-workforce-questions-that-put-your-people-first/', '5 Workforce Questions that Put Your People First', 2, 9, 45, True, False, '2020-02-15 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (46, 'https://www.visier.com/clarity/how-gig-economy-will-impact-hr-in-2020-and-beyond/', 'How the Gig Economy Will Impact HR in 2020 and Beyond', 2, 10, 46, True, False, '2020-02-16 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (47, 'https://www.visier.com/clarity/how-to-make-data-meaningful-during-a-crisis/', 'How to Make Data Meaningful During a Crisis', 2, 10, 47, True, False, '2020-02-17 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (48, 'https://www.visier.com/clarity/key-people-metrics-to-monitor-while-responding-to-a-crisis/', 'Key People Metrics to Monitor While Responding to a Crisis', 2, 10, 48, True, False, '2020-02-18 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (49, 'https://medium.com/hootsuite-engineering/developing-reusable-components-for-ios-743a0d38ddc1', 'Developing Reusable Components for iOS', 4, 1, 49, True, False, '2020-02-19 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (50, 'https://medium.com/hootsuite-engineering/handling-asynchronous-errors-in-scala-at-hootsuite-935f3d0461af', 'Handling asynchronous errors in Scala at Hootsuite', 4, 1, 50, False, False, '2020-02-20 05:30:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
  VALUES (51, 'https://blog.aboutamazon.com/company-news/amazons-actions-to-help-employees-communities-and-customers-affected-by-covid-19', 'Amazon’s COVID-19 blog: daily updates on how we’re responding to the crisis', NULL, 10, 51, False, False, '2020-04-04 05:30:00');

INSERT INTO post_approver(post_id, approver_id)
  VALUES (1, 14);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (1, 17);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (1, 20);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (1, 23);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (2, 26);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (2, 29);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (2, 32);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (2, 35);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (3, 38);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (3, 41);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (3, 44);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (3, 47);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (4, 50);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (4, 53);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (4, 56);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (4, 59);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (5, 62);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (5, 65);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (5, 68);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (5, 71);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (6, 74);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (6, 77);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (6, 80);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (6, 83);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (7, 86);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (7, 89);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (7, 92);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (7, 95);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (8, 98);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (8, 101);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (8, 104);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (8, 107);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (9, 110);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (9, 113);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (9, 116);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (9, 119);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (10, 122);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (11, 125);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (11, 128);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (11, 131);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (11, 134);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (12, 137);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (12, 140);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (12, 143);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (12, 146);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (13, 149);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (13, 152);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (13, 155);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (13, 158);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (14, 161);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (14, 164);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (14, 167);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (14, 170);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (15, 173);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (15, 176);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (15, 179);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (15, 182);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (16, 185);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (16, 188);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (16, 191);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (16, 194);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (17, 197);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (17, 200);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (17, 14);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (17, 17);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (18, 20);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (18, 23);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (18, 26);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (18, 29);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (19, 32);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (19, 35);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (19, 38);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (19, 41);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (20, 44);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (21, 47);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (21, 50);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (21, 53);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (21, 56);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (22, 59);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (22, 62);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (22, 65);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (22, 68);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (23, 71);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (23, 74);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (23, 77);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (23, 80);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (24, 83);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (24, 86);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (24, 89);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (24, 92);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (25, 95);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (25, 98);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (25, 101);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (25, 104);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (26, 107);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (26, 110);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (26, 113);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (26, 116);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (27, 119);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (27, 122);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (27, 125);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (27, 128);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (28, 131);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (28, 134);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (28, 137);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (28, 140);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (29, 143);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (29, 146);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (29, 149);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (29, 152);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (30, 155);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (31, 158);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (31, 161);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (31, 164);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (31, 167);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (32, 170);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (32, 173);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (32, 176);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (32, 179);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (33, 182);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (33, 185);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (33, 188);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (33, 191);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (34, 194);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (34, 197);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (34, 200);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (34, 14);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (35, 17);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (35, 20);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (35, 23);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (35, 26);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (36, 29);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (36, 32);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (36, 35);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (36, 38);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (37, 41);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (37, 44);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (37, 47);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (37, 50);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (38, 53);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (38, 56);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (38, 59);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (38, 62);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (39, 65);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (39, 68);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (39, 71);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (39, 74);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (40, 77);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (41, 80);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (41, 83);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (41, 86);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (41, 89);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (42, 92);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (42, 95);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (42, 98);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (42, 101);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (43, 104);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (43, 107);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (43, 110);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (43, 113);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (44, 116);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (44, 119);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (44, 122);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (44, 125);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (45, 128);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (45, 131);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (45, 134);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (45, 137);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (46, 140);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (46, 143);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (46, 146);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (46, 149);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (47, 152);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (47, 155);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (47, 158);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (47, 161);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (48, 164);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (48, 167);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (48, 170);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (48, 173);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (49, 176);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (49, 179);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (49, 182);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (49, 185);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (50, 188);

# insert 5 blog streams
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
    VALUES (201, 'https://www.wegalvanize.com/blog/feed/', 'Galvanize Blog Stream', 1, NULL, 1, true, true, '2020-02-12T08:04:00+00:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
    VALUES (202, 'https://www.tasktop.com/blog/feed/', 'Tasktop Blog Stream', 3, NULL, 2, true, true, '2020-02-21T08:05:00+00:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
    VALUES (203, 'https://www.visier.com/clarity/feed/', 'Visier Blog Stream', 2, NULL, 3, true, true, '2020-03-10T08:05:00+00:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
    VALUES (204, 'https://blog.hootsuite.com/feed/', 'HootSuite Blog Stream', 4, NULL, 4, false, true, '2020-03-14T08:05:00+00:00');
INSERT INTO post(id, url, title, company_id, category_id, user_id, published, blog_stream, last_updated)
    VALUES (205, 'https://labs.clio.com/feed/', 'Clio Blog Stream', 7, NULL, 5, false, true, '2020-04-01T08:05:00+00:00');

# insert post approvers for blog streams
INSERT INTO post_approver(post_id, approver_id)
  VALUES (201, 1);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (201, 2);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (202, 3);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (202, 4);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (203, 5);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (203, 6);
INSERT INTO post_approver(post_id, approver_id)
  VALUES (204, 7);
