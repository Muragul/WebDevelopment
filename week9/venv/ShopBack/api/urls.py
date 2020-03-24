from django.urls import path
from api.views import get_all_products, get_all_categories, get_product, get_category, get_products_from_category
urlpatterns = [
    path('products/', get_all_products),
    path('products/<int:product_id>/', get_product),
    path('categories/', get_all_categories),
    path('categories/<int:category_id>/', get_category),
    path('categories/<int:category_id>/products/', get_products_from_category)
]