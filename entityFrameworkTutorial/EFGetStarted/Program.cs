using System;

namespace EFGetStarted
{
    using System.Linq;
    using Models;

    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");

            using (var db = new BloggingContext())
            {
                // Criação
                Console.WriteLine("Adicionando novo blog");
                db.Add(new Blog {Url = "http://blogs.msdn.com/adonet"});
                db.SaveChanges();
                
                // Busca
                var blog = db.Blogs
                    .OrderBy(b => b.BlogId)
                    .First();

                // Atualização
                Console.WriteLine("Atualizando");
                blog.Url = "https://devblogs.microsoft.com/dotnet";
                blog.Posts.Add(
                    new Post {Title = "Hello World", Content = "Yay"});

                db.SaveChanges();
                
                Console.WriteLine("Deletando");
                db.Remove(blog);
                db.SaveChanges();
            }
        }
    }
}
