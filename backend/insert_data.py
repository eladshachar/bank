import pymysql

DB_NAME = "bank_app"

try:
    initial_connection = pymysql.connect(
        host="localhost",
        user="root",
        password=""
    )
    print("creating data base...")
    initial_connection.cursor().execute(f'create database {DB_NAME}')
    print("data base created successfully")

except Exception: 
    print("data base already exists!")

# create tables
try:
    initial_connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db=DB_NAME,
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)
    print("creating value table...")

            #          /// DO YOUR TABLE INITIALIZATION HERE ////         #

    # example:
    # initial_connection.cursor().execute('create table dairy(dairy_ingredients varchar(255))')
    # initial_connection.commit()
    # initial_connection.cursor().execute('create table gluten(gluten_ingredients varchar(255))')
    # initial_connection.commit()

    print("table created successfully")
except Exception: 
    print("tables already exists!")

#add ingridients:
try:
    initial_connection = pymysql.connect(
        host="localhost",
        user="root",
        password="",
        db=DB_NAME,
        charset="utf8",
        cursorclass=pymysql.cursors.DictCursor
    )
    with initial_connection.cursor() as cursor:
        print("inserting values...")
        
        #          /// DO YOUR TABLE INSERTS HERE ////         #

        print("Done!")    
except Exception: 
    print(Exception.args[0])
    print("coudlnt insert values!")
