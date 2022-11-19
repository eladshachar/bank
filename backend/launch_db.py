import pymysql



DB_NAME = "bank_app"

initial_connection = pymysql.connect(
   host="localhost",
   user="root",
   password="" 
)

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db=DB_NAME,
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor,
)


def initialize_DB():
    initial_connection.cursor().execute(f"CREATE DATABASE {DB_NAME}")
    initial_connection.close()

def initialize_tables():
    query = """
     CREATE TABLE IF NOT EXISTS transactions(
        transaction_id INTEGER PRIMARY KEY AUTO_INCREMENT,
        transaction_type VARCHAR(255),
        product VARCHAR(255),
        category VARCHAR(255),
        vendor VARCHAR(255),
        num_items INTEGER,
        amount FLOAT
    );
    """

    connection.cursor().execute(query)
    connection.commit()
    connection.close()

# initialize_DB()
# initialize_tables()