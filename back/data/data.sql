DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS patients;
DROP TABLE IF EXISTS doctors;
DROP TABLE IF EXISTS medicaloffice;
DROP TABLE IF EXISTS users;

CREATE TABLE medicaloffice (
                               id INTEGER PRIMARY KEY AUTOINCREMENT,
                               name TEXT NOT NULL,
                               address TEXT NOT NULL,
                               city TEXT NOT NULL,
                               postal_code TEXT NOT NULL
);

CREATE TABLE doctors (
                         id INTEGER PRIMARY KEY AUTOINCREMENT,
                         description TEXT NOT NULL,
                         medicaloffice_id INTEGER,
                         FOREIGN KEY (medicaloffice_id) REFERENCES medicaloffice (id) ON DELETE SET NULL ON UPDATE SET NULL
);

CREATE TABLE patients (
                          id INTEGER PRIMARY KEY AUTOINCREMENT,
                          birthdate DATE NOT NULL,
                          doctor_id INTEGER,
                          FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE SET NULL ON UPDATE SET NULL
);

CREATE TABLE appointments (
                              id INTEGER PRIMARY KEY AUTOINCREMENT,
                              start_time DATETIME NOT NULL,
                              end_time DATETIME NOT NULL,
                              doctor_id INTEGER,
                              patient_id INTEGER,
                              FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE SET NULL ON UPDATE SET NULL,
                              FOREIGN KEY (patient_id) REFERENCES patients (id) ON DELETE SET NULL ON UPDATE SET NULL
);

CREATE TABLE users (
                       id INTEGER PRIMARY KEY AUTOINCREMENT,
                       name TEXT NOT NULL,
                       surname TEXT NOT NULL,
                       email TEXT NOT NULL,
                       password TEXT NOT NULL,
                       patient_id INTEGER,
                       doctor_id INTEGER,
                       FOREIGN KEY (patient_id) REFERENCES patients (id) ON DELETE SET NULL,
                       FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE SET NULL
);

INSERT INTO medicaloffice (name, address, city, postal_code) VALUES
                                                            ('Cabinet A', '123 Main St', 'Anytown', '12345'),
                                                            ('Cabinet B', '456 Oak St', 'Anycity', '67890');

INSERT INTO doctors (description, medicaloffice_id) VALUES
                                                  ('Dr. Smith', 1),
                                                  ('Dr. Johnson', 2);

INSERT INTO patients (birthdate, doctor_id) VALUES
                                                ('1990-01-01', 1),
                                                ('1985-05-05', 2),
                                                ('1970-12-31', 1),
                                                ('1995-06-15', 2);

INSERT INTO appointments (start_time, end_time, doctor_id, patient_id) VALUES
                                                                           ('05/04/2023 09:00', '05/04/2023 10:00', 1, 1),
                                                                           ('06/04/2023 14:30', '06/04/2023 15:30', 2, 2),
                                                                           ('07/04/2023 11:00', '07/04/2023 12:00', 1, 3),
                                                                           ('08/04/2023 16:00', '08/04/2023 17:00', 2, 4);

INSERT INTO users (name, surname, email, password, patient_id, doctor_id) VALUES
                                                                              ('John', 'Doe', 'john.doe@example.com', 'password', 1, NULL),
                                                                              ('Jane', 'Doe', 'jane.doe@example.com', 'password', 2, NULL),
                                                                              ('Bob', 'Smith', 'bob.smith@example.com', 'password', NULL, 1),
                                                                              ('Alice', 'Johnson', 'alice.johnson@example.com', 'password', NULL, 2);
