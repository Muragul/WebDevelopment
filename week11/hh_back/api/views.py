from api.models import Company, Vacancy
from django.http import JsonResponse


def get_all_companies(request):
    try:
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)})


def get_company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        return JsonResponse(company.to_json())
    except Exception as e:
        return JsonResponse({'error': str(e)})


def get_vacancies_by_company(request, company_id):
    try:
        vacancies = Vacancy.objects.filter(company_id=company_id)
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)})


def get_all_vacancies(request):
    try:
        vacancies = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)})


def get_vacancy(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
        return JsonResponse(vacancy.to_json())
    except Exception as e:
        return JsonResponse({'error': str(e)})


def get_top_ten(request):
    try:
        vacancies = Vacancy.objects.all().order_by('-salary')
        vacancies_json = [v.to_json() for v in vacancies[:10]]
        return JsonResponse(vacancies_json, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)})
