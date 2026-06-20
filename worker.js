export default {
  async fetch(request) {
    const url = new URL(request.url);
    const targetUrl = 'https://kaleb-kk.github.io' + url.pathname + url.search;

    // 复制原始请求头
    const headers = new Headers(request.headers);
    headers.set('Host', 'kaleb-kk.github.io');

    // 转发请求到 GitHub Pages
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: headers,
      body: request.body,
      redirect: 'follow',
    });

    // 返回响应，修改一些头信息
    const newResponse = new Response(response.body, response);

    // 添加缓存控制
    if (url.pathname.match(/\.(js|css|png|jpg|svg|ico|woff2?)/)) {
      newResponse.headers.set('Cache-Control', 'public, max-age=86400');
    }

    // 安全头
    newResponse.headers.set('X-Proxy-By', 'Cloudflare-Worker');
    return newResponse;
  }
};
