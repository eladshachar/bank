from pydantic import BaseModel
from typing import Union

class Transaction(BaseModel):
    transaction_type: str
    product: Union[str, None] = None
    category: Union[str, None] = None
    vendor: Union[str, None] = None
    num_items: Union[int, None] = None
    amount: float