##### Spring Cloud 开发


Spring 是 JavaEE 的一个轻量级开发框架，主营 IoC 和 AOP，集成 JDBC、ORM、MVC 等功能便于开发。

Spring Boot 是基于 Spring，提供开箱即用的积木式组件，目的是提升开发效率。

那么 Spring Cloud 是啥？

Spring Cloud 顾名思义是跟云相关的，云程序实际上就是指分布式应用程序，所以 Spring Cloud 就是为了让分布式应用程序编写更方便，更容易而提供的一组基础设施，它的核心是 Spring 框架，利用 Spring Boot 的自动配置，力图实现最简化的分布式应用程序开发。

![springcloud](./assets/l-20231221141421356.png)

Spring Cloud 包含了一大堆技术组件，既有开源社区开发的组件，也有商业公司开发的组件，既有持续更新迭代的组件，也有即将退役不再维护的组件。

本章会介绍如何基于 Spring Cloud 创建分布式应用程序，但并不会面面俱到地介绍所有组件，而是挑选几个核心组件，演示如何构造一个基本的分布式应用程序。

