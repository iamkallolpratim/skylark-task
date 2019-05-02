export function cacheBuster(url){
    const cache_buster = new Date().getTime();
    if (url instanceof URL) {
        if (url.search.indexOf('?') !== -1) {
          url.search += `&_=${cache_buster}`;
        } else {
          url.search += `?_=${cache_buster}`;
        }
      } else {
        if (url.indexOf('?') !== -1) {
          url += `&_=${cache_buster}`;
        } else {
          url += `?_=${cache_buster}`;
        }
      }
      return url;
}

