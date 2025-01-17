import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  private cache = new Map<string, any>();

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const cacheKey = this.generateCacheKey(request);

    if (this.cache.has(cacheKey)) {
      const cachedData = this.cache.get(cacheKey);
      console.log('Intercepted and returning cached data:', cachedData);
      return of(cachedData);
    }

    console.log('Before the route handler runs...');
    return next.handle().pipe(
      tap((response) => {
        console.log('After the route handler runs...');
        console.log(`Caching response for key: ${cacheKey}`);
        this.cache.set(cacheKey, response);
      }),
    );
  }

  private generateCacheKey(request: any): string {
    const { method, url, query, body } = request;
    return `${method}-${url}-${JSON.stringify(query)}-${JSON.stringify(body)}`;
  }
}
